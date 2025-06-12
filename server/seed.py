from flask import Flask
from flask_pymongo import PyMongo
from datetime import datetime
import gridfs

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://aniketmore2000th:wh8hLEWsvzwPRTfD@cluster0.ecbrfai.mongodb.net/database"
mongo = PyMongo(app)

def seed_database():
    # Create collections if they don't exist
    collections = [
        'logins',
        'departments',
        'faculty',
        'forum_posts',
        'announcements',
        'attendance_collection'
    ]
    
    for collection in collections:
        if collection not in mongo.db.list_collection_names():
            mongo.db.create_collection(collection)
    
    # Sample department data
    departments = [
        {
            "name": "Computer Science",
            "code": "CS",
            "description": "Department of Computer Science and Engineering"
        },
        {
            "name": "Information Technology",
            "code": "IT",
            "description": "Department of Information Technology"
        }
    ]
    
    # Sample faculty data
    faculty = [
        {
            "name": "Dr. John Doe",
            "department": "CS",
            "designation": "Professor",
            "email": "john.doe@college.edu"
        },
        {
            "name": "Dr. Jane Smith",
            "department": "IT",
            "designation": "Associate Professor",
            "email": "jane.smith@college.edu"
        }
    ]
    
    # Sample announcement
    announcements = [
        {
            "title": "Welcome to New Academic Year",
            "content": "Welcome to the new academic year 2024-25",
            "date": datetime.now(),
            "department": "all"
        }
    ]
    
    # Insert sample data
    mongo.db.departments.insert_many(departments)
    mongo.db.faculty.insert_many(faculty)
    mongo.db.announcements.insert_many(announcements)
    
    print("Database seeded successfully!")

if __name__ == "__main__":
    with app.app_context():
        seed_database() 