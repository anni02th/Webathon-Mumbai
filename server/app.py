from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/student', methods=['GET'])
def student_page():
    return jsonify(message="Hi aditya"), 200

if __name__ == '__main__':
    app.run(debug=True)
