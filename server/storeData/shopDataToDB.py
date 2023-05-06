import pymysql
import json

def insertsql_from_json():
    # connection 정보
    # 접속
    # 비밀번호가 포함되어 있기 때문에 보통 config파일에서 key값으로 부른다.
    conn = pymysql.connect(
        host = "localhost", 
        port=3306,
        user = "admin", 
        password = "1234",
        database = "dog_inf_mall",
        charset = 'utf8'
    )
    # Cursor Object 가져오기
    curs = conn.cursor()

    #geoJson 가져오기
    with open('./shopData.json', encoding='utf-8') as json_file:
        json_data = json.load(json_file)

        for data in json_data:
            title = data['title']
            category = data['category']
            choice = data['choice']
            price = data['price']
            amount = data['amount']
            image = data['image']

            sql = "INSERT INTO product(title, category, choice, price, image,amount) VALUES (%s, %s, %s, %s, %s, %s)"
            val = (title, str(category), str(choice), int(price), str(image), int(amount))

            curs.execute(sql, val)
            conn.commit()

    print(curs.rowcount, "record inserted")

insertsql_from_json()
