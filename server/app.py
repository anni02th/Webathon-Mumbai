from flask import Flask, request, jsonify, session
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from bson.objectid import ObjectId

app = Flask(__name__)

# MongoDB connection string
app.config["MONGO_URI"] = "mongodb://localhost:27017/webathon"
mongo = PyMongo(app)
jwt = JWTManager(app)

# Enable CORS
CORS(app, supports_credentials=True)  # Allow credentials (cookies) to be sent

# JWT Secret Key
app.config["JWT_SECRET_KEY"] = "jyotidagamore"

# Secret key for session management
app.secret_key = 'kinggolu43'  # Replace with your secret key

# MongoDB collections
users_collection = mongo.db.logins
students_collection = mongo.db.students  # New collection for student info and attendance

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    # Extract all necessary fields from the request data
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')
    firstName = data.get('firstName')
    lastName = data.get('lastName')
    birthDate = data.get('birthDate')

    # Check if all required fields are provided
    if not all([email, password, role, firstName, lastName, birthDate]):
        return jsonify({"msg": "Missing data"}), 400

    # Check if user already exists
    if users_collection.find_one({"email": email}):
        return jsonify({"msg": "User already exists"}), 409

    # Hash the password for security
    hashed_password = generate_password_hash(password)
    
    # Prepare user data for insertion into MongoDB
    user_data = {
        "email": email,
        "password": hashed_password,
        "role": role,
        "firstName": firstName,
        "lastName": lastName,
        "birthDate": birthDate  # Include birth date in the user data
    }

    # Insert the new user into the database
    users_collection.insert_one(user_data)
    
    # Return a success message
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
    session['user_id'] = str(user['_id'])  # Store user ID in the session
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
    session.pop('user_id', None)  # Clear the session
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/api/attendance', methods=['GET'])
def get_attendance():
    # Fetch all students with their attendance
    students = students_collection.find()
    attendance_data = []

    for student in students:
        for att in student.get('attendance', []):
            attendance_entry = {
                'date': att['date'],
                'type': att['type'],
                'student': {
                    'id': str(student['_id']),
                    'name': student.get('username', 'Unknown'),
                    'present': att['status'] == 'Present'
                }
            }
            attendance_data.append(attendance_entry)

    return jsonify(attendance_data), 200


@app.route('/api/students', methods=['GET'])
def get_students():
    students = students_collection.find()
    student_list = []
    for student in students:
        student_data = {
            '_id': str(student['_id']),
            'name': student.get('firstName', 'lastName')  # Use get() to provide a default value
        }
        student_list.append(student_data)
    return jsonify(student_list), 200

@app.route('/api/attendance', methods=['POST'])
def add_attendance():
    data = request.get_json()
    if not data or 'date' not in data or 'type' not in data or 'students' not in data:
        return jsonify({"msg": "Incomplete attendance data"}), 400

    for student in data['students']:
        student_id = student.get('id')
        present = student.get('present', False)
        if student_id:
            students_collection.update_one(
                {'_id': ObjectId(student_id)},
                {
                    '$push': {
                        'attendance': {
                            'date': data['date'],
                            'type': data['type'],
                            'status': 'Present' if present else 'Absent'
                        }
                    }
                }
            )
        else:
            # Log or handle the case where student ID is missing
            continue

    return jsonify({'msg': 'Attendance recorded successfully'}), 201


# Test MongoDB connection
@app.route('/test_mongo', methods=['GET'])
def test_mongo():
    try:
        mongo.db.command("ping")
        return jsonify({"msg": "MongoDB connection is successful"}), 200
    except Exception as e:
        return jsonify({"msg": "MongoDB connection failed", "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
