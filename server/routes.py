from flask import Blueprint, request, jsonify
from models import User, bcrypt
from utils import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    if User.find_by_email(email):
        return jsonify({'message': 'User already exists'}), 400

    user_data = {
        'email': email,
        'password': hashed_password,
        'role': data.get('role')
    }
    User.insert(user_data)

    return jsonify({'message': 'User created successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    user = User.find_by_email(email)
    if user and bcrypt.check_password_hash(user['password'], password) and user['role'] == role:
        access_token = create_access_token(identity={'email': email, 'role': role})
        return jsonify({'token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid credentials or role'}), 401
