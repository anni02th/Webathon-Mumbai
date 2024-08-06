import requests

url = 'http://localhost:5000/api/personalizedgpt'
files = {'file': open('test_pdf/about-kkw-pdf.pdf', 'rb')}
data = {
    'query': 'what accreditions does the college have?'
}

response = requests.post(url, files=files, data=data)
try:
    json_response = response.json()
    print(json_response)
except requests.exceptions.JSONDecodeError:
    print("Failed to decode JSON response")
