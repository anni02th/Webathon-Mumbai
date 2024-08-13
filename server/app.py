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
announcements_collection = mongo.db.announcements
attendance_collection = mongo.db.students

fs = gridfs.GridFS(mongo.db)
db = mongo.db

UPLOAD_FOLDER = 'download_ac/academic_calendar'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])


# # Flask-Mail configuration
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = 'dagamore1312@gmail.com'  # Replace with your email address
# app.config['MAIL_PASSWORD'] = 'your-email-password'  # Replace with your email password
# app.config['MAIL_DEFAULT_SENDER'] = 'dagamore1312@gmail.com'  # Default sender if not specified in Message

# mail = Mail(app)

# # Set up logging
# logging.basicConfig(level=logging.DEBUG)

# @app.route('/send-mail', methods=['POST'])
# def send_mail():
#     try:
#         data = request.get_json()
#         firstName = data.get('firstName')
#         lastName = data.get('lastName')
#         email = data.get('email')
#         phoneNo = data.get('phoneNo')
#         yourMess = data.get('yourMess')

#         logging.debug(f"Received data: {data}")

#         msg = Message(
#             subject='New Contact Form Submission',
#             sender=app.config['MAIL_DEFAULT_SENDER'],  # Use default sender
#             recipients=['kinggolu43@gmail.com']  # Replace with the recipient email address
#         )
#         msg.body = f"""
#         First Name: {firstName}
#         Last Name: {lastName}
#         Email: {email}
#         Phone No: {phoneNo}
#         Message: {yourMess}
#         """

#         logging.debug(f"Sending email with message: {msg.body}")

#         mail.send(msg)
#         logging.debug("Email sent successfully")
#         return jsonify({'message': 'Mail sent successfully!'}), 200

#     except Exception as e:
#         logging.error(f"Error sending email: {e}", exc_info=True)  # Log the specific error with traceback
#         return jsonify({'error': 'There was an error sending the mail!'}), 500


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

@app.route('/api/admin/faculty', methods=['GET', 'POST', 'PUT', 'DELETE'])
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
    elif request.method == 'PUT':
        try:
            updated_faculty = request.json
            faculty_collection.update_one({'id': updated_faculty['id']}, {'$set': updated_faculty})
            return jsonify({'msg': 'Faculty updated successfully'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    elif request.method == 'DELETE':
        try:
            faculty_id = request.json.get('id')
            result = faculty_collection.delete_one({'id': faculty_id})
            if result.deleted_count == 1:
                return jsonify({'msg': 'Faculty deleted successfully'}), 200
            else:
                return jsonify({'error': 'Faculty not found'}), 404
        except Exception as e:
            return jsonify({'error': str(e)}), 500
        
# Upload Academic Calendar
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
        return jsonify({'msg': 'File uploaded successfully', 'filename': filename}), 201
    else:
        return jsonify({'error': 'Invalid file type, only PDF allowed'}), 400

# Get Academic Calendar
@app.route('/api/admin/acad_calendar', methods=['GET'])
def get_academic_calendar():
    try:
        files = os.listdir(app.config['UPLOAD_FOLDER'])
        pdf_files = [file for file in files if file.endswith('.pdf')]
        if not pdf_files:
            return jsonify({'error': 'No calendar found'}), 404
        return jsonify({'filename': pdf_files[0]}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Download Academic Calendar
@app.route('/api/admin/acad_calendar/<filename>', methods=['GET'])
def download_academic_calendar(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=False)
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404

# Delete Academic Calendar
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


# Function to extract text from a PDF file
def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)
        text += page.get_text()
    return text

# Route to handle personalized GPT requests
@app.route('/api/personalizedgpt', methods=['POST'])
def personalized_gpt():
    query = request.form.get('query')
    if not query:
        return jsonify({"error": "Query is required"}), 400

    pdf_file = request.files.get('file')
    context = ""

    # If a PDF is uploaded, extract text from it
    if pdf_file:
        try:
            with tempfile.NamedTemporaryFile(delete=False) as tmp:
                pdf_path = tmp.name
                pdf_file.save(pdf_path)
            context = extract_text_from_pdf(pdf_path)
        except Exception as e:
            return jsonify({"error": f"Error extracting text from PDF: {str(e)}"}), 500

    # Create the prompt with or without PDF context
    if context:
        prompt = f"Your name is PersonalizedGPT and you are a helpful and knowledgeable assistant for college students. You assist with their studies and provide concise explanations based on the provided PDF notes.\n\n{context}\n\nBased on the above notes, answer the following query:\n{query}"
    else:
        prompt = f"Your name is PersonalizedGPT and you are a helpful and knowledgeable assistant for college students. You assist with their studies and provide concise explanations and answers.\n\nAnswer the following query:\n{query}"

    # Send the prompt to the GPT model
    try:
        response = requests.post(
            "https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/meta/llama-3-8b-instruct",
            headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
            json={
                "messages": [
                    {"role": "system", "content": "You are a friendly assistant"},
                    {"role": "user", "content": prompt}
                ]
            }
        )
        response.raise_for_status()  # Raise an exception for HTTP errors
        result = response.json()
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Error communicating with GPT model: {str(e)}"}), 500

    # Return the response from the GPT model
    return jsonify(result)

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

    filename = secure_filename(file.filename)
    file_id = fs.put(file, filename=filename)

    db.notes.insert_one({
        "filename": filename,
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


@app.route('/api/notes', methods=['GET'])
def get_notes():
    notes = db.notes.find()
    notes_list = []
    for note in notes:
        notes_list.append({
            "filename": note['filename'],
            "subject": note['subject'],
            "unit": note['unit'],
            "branch": note['branch'],
            "uploaded_by": note['uploaded_by'],
            "div": note['div'],
            "year": note['year'],
            "upload_date": note['upload_date'].isoformat()
        })
    return jsonify(notes_list)


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

@app.route('/api/announcements', methods=['POST'])
def post_announcement():
    data = request.get_json()
    title = data.get('title')
    message = data.get('message')

    if not title or not message:
        return jsonify({'error': 'Title and message are required'}), 400

    # Save announcement to a database or file
    # For demonstration, just return a success message
    return jsonify({'msg': 'Announcement posted successfully'}), 201

# app.py
@app.route('/api/announcements', methods=['GET'])
def get_announcements():
    # Fetch announcements from your database or file
    announcements = [
        {'title': 'Exam Schedule', 'message': 'The exam schedule has been updated.'},
        {'title': 'Holiday Notice', 'message': 'The campus will be closed on August 15.'},
    ]  # Replace with actual data retrieval logic
    return jsonify(announcements)


@app.route('/api/students', methods=['GET'])
@jwt_required()
def get_students():
    try:
        students = list(students_collection.find({}))
        for student in students:
            student['_id'] = str(student['_id'])
        return jsonify(students), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Fetch attendance records
@app.route('/api/attendance', methods=['GET'])
@jwt_required()
def get_attendance():
    try:
        attendance = list(attendance_collection.find({}))
        for record in attendance:
            record['_id'] = str(record['_id'])
            record['student']['_id'] = str(record['student']['_id'])
        return jsonify(attendance), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Mark attendance
@app.route('/api/attendance', methods=['POST'])
@jwt_required()
def mark_attendance():
    try:
        data = request.get_json()
        date = data.get('date')
        type = data.get('type')
        students = data.get('students')

        for student in students:
            attendance_record = {
                "date": date,
                "type": type,
                "student": {
                    "_id": ObjectId(student['id']),
                    "present": student['present']
                }
            }
            attendance_collection.insert_one(attendance_record)

        return jsonify({"message": "Attendance marked successfully."}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
