import fitz
from getdirections import get_classroom_location
from flask import Flask, request, jsonify, session, send_from_directory, send_file
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os, io
from werkzeug.utils import secure_filename
import requests
import tempfile
from flask_mail import Mail, Message
import gridfs
from datetime import datetime, timezone
load_dotenv()

app = Flask(__name__)

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)
jwt = JWTManager(app)

CORS(app, supports_credentials=True)

app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

app.secret_key = os.getenv("SECRET_KEY")

ACCOUNT_ID = os.getenv("ACCOUNT_ID")
AUTH_TOKEN = os.getenv("API_TOKEN")

users_collection = mongo.db.logins
students_collection = mongo.db.students
departments_collection = mongo.db.departments
faculty_collection = mongo.db.faculty
forum_posts_collection = mongo.db.forum_posts

fs = gridfs.GridFS(mongo.db)
db = mongo.db

UPLOAD_FOLDER = 'download_ac/academic_calendar'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'dagamore1312@gmail.com'  # Replace with your email address
app.config['MAIL_PASSWORD'] = 'your-email-password'  # Replace with your email password
app.config['MAIL_DEFAULT_SENDER'] = 'dagamore1312@gmail.com'  # Default sender if not specified in Message

mail = Mail(app)

# Set up logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/send-mail', methods=['POST'])
def send_mail():
    try:
        data = request.get_json()
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        email = data.get('email')
        phoneNo = data.get('phoneNo')
        yourMess = data.get('yourMess')

        logging.debug(f"Received data: {data}")

        msg = Message(
            subject='New Contact Form Submission',
            sender=app.config['MAIL_DEFAULT_SENDER'],  # Use default sender
            recipients=['kinggolu43@gmail.com']  # Replace with the recipient email address
        )
        msg.body = f"""
        First Name: {firstName}
        Last Name: {lastName}
        Email: {email}
        Phone No: {phoneNo}
        Message: {yourMess}
        """

        logging.debug(f"Sending email with message: {msg.body}")

        mail.send(msg)
        logging.debug("Email sent successfully")
        return jsonify({'message': 'Mail sent successfully!'}), 200

    except Exception as e:
        logging.error(f"Error sending email: {e}", exc_info=True)  # Log the specific error with traceback
        return jsonify({'error': 'There was an error sending the mail!'}), 500


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    birthDate = data.get('birthDate')

    if not all([email, password, role, firstName, lastName, birthDate]):
        return jsonify({"msg": "Missing data"}), 400

    if users_collection.find_one({"email": email}):
        return jsonify({"msg": "User already exists"}), 409

    hashed_password = generate_password_hash(password)

    user_data = {
        "email": email,
        "password": hashed_password,
        "role": role,
        "firstName": firstName,
        "lastName": lastName,
        "birthDate": birthDate
    }

    users_collection.insert_one(user_data)

    return jsonify({"msg": "User created successfully"}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    user = users_collection.find_one({"email": email, "role": role})
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"msg": "Invalid credentials"}), 401

    access_token = create_access_token(identity={"email": email, "role": role})
    session['user_id'] = str(user['_id'])
    return jsonify(access_token=access_token), 200


@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@app.route('/user', methods=['GET'])
def get_user_info():
    if 'user_id' in session:
        user = users_collection.find_one({"_id": ObjectId(session['user_id'])})
        if user:
            return jsonify({
                'email': user.get('email'),
                'role': user.get('role')
            })
    return jsonify({'error': 'User not logged in'}), 401


@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({'message': 'Logged out successfully'}), 200


@app.route('/test_mongo', methods=['GET'])
def test_mongo():
    try:
        mongo.db.command("ping")
        return jsonify({"msg": "MongoDB connection is successful"}), 200
    except Exception as e:
        return jsonify({"msg": "MongoDB connection failed", "error": str(e)}), 500

@app.route('/api/admin/departments', methods=['GET', 'POST'])
def handle_departments():
    if request.method == 'GET':
        try:
            departments = list(departments_collection.find({}, {'_id': 0}))
            return jsonify(departments), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    elif request.method == 'POST':
        try:
            new_department = request.json
            departments_collection.insert_one(new_department)
            return jsonify({'msg': 'Department added successfully'}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 500

@app.route('/api/admin/departments', methods=['DELETE'])
def delete_department():
    try:
        department_name = request.json.get('name')
        result = departments_collection.delete_one({'name': department_name})
        if result.deleted_count == 1:
            return jsonify({'msg': 'Department deleted successfully'}), 200
        else:
            return jsonify({'error': 'Department not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
# for admin to add, delete or see faculty
@app.route('/api/admin/faculty', methods=['GET', 'POST', 'DELETE'])
def handle_faculty():
    if request.method == 'GET':
        try:
            faculty = list(faculty_collection.find({}, {'_id': 0}))
            return jsonify(faculty), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    elif request.method == 'POST':
        try:
            new_faculty = request.json
            faculty_collection.insert_one(new_faculty)
            return jsonify({'msg': 'Faculty added successfully'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    elif request.method == 'DELETE':
        try:
            faculty_email = request.json.get('email')
            result = faculty_collection.delete_one({'email': faculty_email})
            if result.deleted_count == 1:
                return jsonify({'msg': 'Faculty deleted successfully'}), 200
            else:
                return jsonify({'error': 'Faculty not found'}), 404
        except Exception as e:
            return jsonify({'error': str(e)}), 500


# for admin to add calendar
@app.route('/api/admin/acad_calendar', methods=['POST'])
def upload_academic_calendar():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'msg': 'File uploaded successfully'}), 201
    else:
        return jsonify({'error': 'Invalid file type, only PDF allowed'}), 400


# for admin to get calendar
@app.route('/api/admin/acad_calendar/<filename>', methods=['GET'])
def download_academic_calendar(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404


# for admin to delete calendar
@app.route('/api/admin/acad_calendar/<filename>', methods=['DELETE'])
def delete_academic_calendar(filename):
    try:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if os.path.exists(file_path):
            os.remove(file_path)
            return jsonify({'msg': 'File deleted successfully'}), 200
        else:
            return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# for get directions feature
@app.route('/api/getdirections', methods=['GET'])
def get_directions():
    classroom = request.args.get('classroom')
    if not classroom:
        return jsonify({'error': 'Classroom parameter is required'}), 400

    location = get_classroom_location(classroom)
    return jsonify({'location': location})


# for personalized gpt - extract text from pdf
def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)
        text += page.get_text()
    return text


# for personalized gpt
@app.route('/api/personalizedgpt', methods=['POST'])
def personalized_gpt():
    query = request.form.get('query')
    if not query:
        return jsonify({"error": "Query is required", "your_query": query}), 400

    pdf_file = request.files.get('file')
    if pdf_file:
        
        with tempfile.NamedTemporaryFile(delete=False) as tmp:
            pdf_path = tmp.name
            pdf_file.save(pdf_path)

        context = extract_text_from_pdf(pdf_path)
        prompt = "Your name is PersonalizedGPT and you are a helpful and knowledgeable assistant for college students. You assist with their studies and provide consise explanations based on the provided PDF notes.\n\n {context}\n\nBased on the above notes, answer the following query:\n{query}"
    else:
        prompt = "You name is PersonalizedGPT and you are a helpful and knowledgeable assistant for college students. You assist with their studies and provide consise explanations and answers.\n\nAnswer the following query:\n{query}"

    response = requests.post("https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3-8b-instruct",
        headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
        json={
            "messages": [
                {"role": "system", "content": "You are a friendly assistant"},
                {"role": "user", "content": prompt}
            ]
        }
    )

    result = response.json()

    return jsonify(result)


# to upload the notes
@app.route('/api/upload_note', methods=['POST'])
def upload_note():
    file = request.files.get('file')
    if not file:
        return jsonify({"error": "PDF file is required"}), 400

    subject = request.form.get('subject')
    unit = request.form.get('unit')
    branch = request.form.get('branch')
    uploaded_by = request.form.get('uploaded_by')
    div = request.form.get('div')
    year = request.form.get('year')

    if not all([subject, unit, branch, uploaded_by, div, year]):
        return jsonify({"error": "All metadata fields are required"}), 400

    file_id = fs.put(file, filename=file.filename)

    db.notes.insert_one({
        "filename": file.filename,
        "file_id": file_id,
        "upload_date": datetime.now(timezone.utc),
        "subject": subject,
        "unit": unit,
        "branch": branch,
        "uploaded_by": uploaded_by,
        "div": div,
        "year": year
    })

    return jsonify({"message": "Note has been successfully uploaded", "file_id": str(file_id)})


# to download the notes
@app.route('/api/download_note/<file_id>', methods=['GET'])
def download_note(file_id):
    try:
        note = db.notes.find_one({"file_id": ObjectId(file_id)})
        if not note:
            return jsonify({"error": "Note not found"}), 404

        file = fs.get(ObjectId(file_id))
        return send_file(
            io.BytesIO(file.read()),
            download_name=note['filename'],
            as_attachment=True
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# to display the notes
@app.route('/api/get_notes', methods=['GET'])
def get_notes():
    subject = request.args.get('subject')
    unit = request.args.get('unit')
    branch = request.args.get('branch')
    uploaded_by = request.args.get('uploaded_by')
    div = request.args.get('div')
    year = request.args.get('year')

    query = {}
    if subject:
        query['subject'] = subject
    if unit:
        query['unit'] = unit
    if branch:
        query['branch'] = branch
    if uploaded_by:
        query['uploaded_by'] = uploaded_by
    if div:
        query['div'] = div
    if year:
        query['year'] = year

    notes = list(db.notes.find(query))
    for note in notes:
        note['_id'] = str(note['_id'])
        note['file_id'] = str(note['file_id'])

    return jsonify(notes)


# to post on the forum
@app.route('/api/forum/post', methods=['POST'])
def create_forum_post():
    data = request.get_json()
    content = data.get('content')
    
    if not content:
        return jsonify({"error": "Content is required"}), 400
    
    post = {
        "content": content,
        "timestamp": datetime.now(timezone.utc),
        "likes": 0
    }
    
    result = forum_posts_collection.insert_one(post)
    
    return jsonify({"message": "Post created successfully", "id": str(result.inserted_id)}), 201


# to display the post on the forum
@app.route('/api/forum/posts', methods=['GET'])
def get_forum_posts():
    limit = int(request.args.get('limit', 50))
    skip = int(request.args.get('skip', 0))
    
    posts = list(forum_posts_collection.find({}, {'_id': 1, 'content': 1, 'timestamp': 1, 'likes': 1})
                 .sort('timestamp', -1)
                 .skip(skip)
                 .limit(limit))
    
    for post in posts:
        post['_id'] = str(post['_id'])
        post['timestamp'] = post['timestamp'].isoformat()
    
    return jsonify(posts), 200


# to like the post on the forum
@app.route('/api/forum/post/<post_id>/like', methods=['POST'])
def like_forum_post(post_id):
    try:
        result = forum_posts_collection.update_one(
            {'_id': ObjectId(post_id)},
            {'$inc': {'likes': 1}}
        )
        
        if result.modified_count == 0:
            return jsonify({"error": "Post not found"}), 404
        
        return jsonify({"message": "Post liked successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
