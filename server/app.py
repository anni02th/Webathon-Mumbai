from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Sample data
faculty_data = [
    {"imgsrc": "/teacher1.png", "name": "R. M. Bora", "position": "Assistant Professor", "education": "B.E. (Computer) M.E. (Computer)"},
    {"imgsrc": "/teacher2.png", "name": "Prof. (Dr.) S. Kamlapurkar", "position": "Professor", "education": "B.E. (Computer) M.E. (Computer Engineering)"},
    # Add more faculty data here...
]

@app.route('/api/faculty', methods=['GET'])
def get_faculty():
    return jsonify(faculty_data)

if __name__ == '__main__':
    app.run(debug=True)
