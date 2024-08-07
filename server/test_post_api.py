# testing the api/forum 

import requests

url = 'http://127.0.0.1:5000/api/forum/post/66b31eaade0dcec76a96519e/like'
response = requests.post(url)
print(response.json())