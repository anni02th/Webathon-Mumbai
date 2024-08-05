from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask import Flask

app = Flask(__name__)
app.config.from_object('config.Config')
mongo = PyMongo(app)
bcrypt = Bcrypt(app)

class User:
    @staticmethod
    def find_by_email(email):
        return mongo.db.users.find_one({'email': email})

    @staticmethod
    def insert(user_data):
        mongo.db.users.insert_one(user_data)
