# 네이버 검색 API 예제 - 블로그 검색
import os
import sys
import urllib.request
client_id = "jhSC6O5vsApq601bd64E"
client_secret = "nQ3NbbdS_d"
encText = urllib.parse.quote("강아지 사료")
url = "https://openapi.naver.com/v1/search/blog?query=" + encText # JSON 결과
# url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # XML 결과
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)

########################################################################################################################
# import pymysql
# import json
# def insertsql_from_json():
#     # connection 정보

#     # 접속
#     # 비밀번호가 포함되어 있기 때문에 보통 config파일에서 key값으로 부른다.
#     conn = pymysql.connect(
#         host = "localhost", 	 #ex) '127.0.0.1'
#         port=3306,
#         user = "root", 		 #ex) root
#         password = "1234",
#         database = "safemap",
#         charset = 'utf8'
#     )
#     # Cursor Object 가져오기
#     curs = conn.cursor()
               
#     #geoJson 가져오기
#     with open('static/json/AvailableLoadData.json', encoding='utf-8') as json_file:
#         json_data = json.load(json_file)
#         #json의 key로 접근
#         #json_line : json 객체를 가지는 Array
#         json_line = json_data['geometries']

#         for a in json_line:
#             lon = a['coordinates'][0]
#             lat = a['coordinates'][1]

#             sql = "INSERT INTO loadpoint(lat, lon) VALUES (%s, %s)"
#             val = (float(lat), float(lon))

#             curs.execute(sql, val)
#             conn.commit()

#     print(curs.rowcount, "record inserted")

# insertsql_from_json()