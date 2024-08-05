from flask_jwt_extended import JWTManager, create_access_token
from app import app

app.config['JWT_SECRET_KEY'] = 'jwt_secret_key'
jwt = JWTManager(app)
