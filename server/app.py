from flask import Flask, request, jsonify, session, send_from_directory
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os
from werkzeug.utils import secure_filename
load_dotenv()
from getdirections import get_classroom_location

app = Flask(__name__)

app.config["MONGO_URI"] = os.getenv("MONGO_URI")
mongo = PyMongo(app)
jwt = JWTManager(app)

CORS(app, supports_credentials=True) 

app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

app.secret_key = os.getenv("SECRET_KEY")

users_collection = mongo.db.logins
students_collection = mongo.db.students
departments_collection = mongo.db.departments
faculty_collection = mongo.db.faculty

UPLOAD_FOLDER = 'download/academic_calendar'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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


# for admin to add or see departments
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


# for admin to delete departments
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


if __name__ == '__main__':
    app.run(debug=True)
