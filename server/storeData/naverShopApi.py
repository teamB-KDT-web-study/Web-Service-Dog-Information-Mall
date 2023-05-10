# 네이버 검색 API 예제 - 블로그 검색
import os
import sys
import urllib.request
import json

# 강아지 사료, 강아지 목줄, 강아지 간식, 강아지 쿠션, 강아지 옷
q1 = "강아지 사료"
d1 = {"weight": ["1kg", "5kg", "10kg"]}

q2 = "강아지 목줄"
d2 = {"length": ["1m", "1.5m", "2m"]}

q3 = "강아지 간식"
d3 = {"piece": ["5", "10", "20"]}

q4 = "강아지 쿠션"
d4= {"width": ["20cm", "30cm", "50cm"]}

q5 = "강아지 옷"
d5 = {"size": ["small", "medium", "large"]}

q = q5
d = d5

client_id = "jhSC6O5vsApq601bd64E"
client_secret = "nQ3NbbdS_d"
encText = urllib.parse.quote(q)
url = "https://openapi.naver.com/v1/search/shop?display=10&query=" + encText  # JSON 결과
# url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # XML 결과
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id", client_id)
request.add_header("X-Naver-Client-Secret", client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if rescode == 200:
    response_body = response.read()
    result = []
    json_data = json.loads(response_body.decode("utf-8"))['items']
    for i in range(len(json_data)):
        title = "".join(json_data[i]["title"].replace('</b>', '<b>').split('<b>'))
        result.append({
                       "title": title,
                       "category": q,
                       "choice": d,
                       "image": json_data[i]["image"],
                       "price": int(json_data[i]["lprice"]) ,
                       "amount": 50})

    with open(f"./shop{q}.json", "w", encoding="UTF-8") as outfile:
        json.dump(result, outfile, ensure_ascii=False)
else:
    print("Error Code:" + rescode)

