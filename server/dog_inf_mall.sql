-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.


-- 최초 실행시에만 데이터베이스 생성문 실행.
-- CREATE DATABASE dog_inf_mall DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

use dog_inf_mall;






-- 기존 테이블 삭제
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS dog;
DROP TABLE IF EXISTS shopping_cart;
DROP TABLE IF EXISTS board;
DROP TABLE IF EXISTS board_like;


-- user Table Create SQL
-- 테이블 생성 SQL - user
CREATE TABLE user
(
    `id`             VARCHAR(15)   NOT NULL, 
    `password`       VARCHAR(25)     NOT NULL, 
    `nickname`       VARCHAR(15)     NOT NULL UNIQUE, 
    `grade`          ENUM('남남', '서먹한 친구', '그냥 친구', '친한 친구', '베스트 프렌드')     NULL        DEFAULT '남남', 
    `profile_img`  VARCHAR(100)    NULL        DEFAULT 'default.jpg', 
     PRIMARY KEY (id)
);


-- product Table Create SQL
-- 테이블 생성 SQL - product

CREATE TABLE product
(
    `id`        INT UNSIGNED    NOT NULL    AUTO_INCREMENT, 
    `title`     VARCHAR(200)     NOT NULL, 
    `category`  VARCHAR(20)     NOT NULL, 
    `choice`    VARCHAR(100)    NULL, 
    `image`     VARCHAR(100)    NULL        DEFAULT 'default이미지id', 
    `price`     INT UNSIGNED    NOT NULL, 
    `amount`    INT UNSIGNED    NOT NULL, 
     PRIMARY KEY (id)
);


-- dog Table Create SQL
-- 테이블 생성 SQL - dog
CREATE TABLE dog
(
    `name`       VARCHAR(15)       NOT NULL, 
    `pet_owner`  VARCHAR(15)      NOT NULL, 
    `gender`     ENUM('F', 'M')    NULL, 
    `age`        INT UNSIGNED      NULL, 
    `breed`      VARCHAR(20)       NOT NULL, 
    `weight`     INT UNSIGNED      NULL, 
     PRIMARY KEY (name, pet_owner)
);

-- Foreign Key 설정 SQL - dog(pet_owner) -> user(id)
ALTER TABLE dog
    ADD CONSTRAINT FK_dog_pet_owner_user_id FOREIGN KEY (pet_owner)
        REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Foreign Key 삭제 SQL - dog(pet_owner)
-- ALTER TABLE dog
-- DROP FOREIGN KEY FK_dog_pet_owner_user_id;


-- shopping_cart Table Create SQL
-- 테이블 생성 SQL - shopping_cart
CREATE TABLE shopping_cart
(
    `user_id`    VARCHAR(15)    NOT NULL, 
    `product_id`  INT UNSIGNED    NOT NULL, 
    `choice`      VARCHAR(50)     NOT NULL, 
    `amount`      INT UNSIGNED    NOT NULL, 
     PRIMARY KEY (user_id, product_id, choice)
);

-- Foreign Key 설정 SQL - shopping_cart(user_id) -> user(id)
ALTER TABLE shopping_cart
    ADD CONSTRAINT FK_shopping_cart_user_id_user_id FOREIGN KEY (user_id)
        REFERENCES user (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Foreign Key 삭제 SQL - shopping_cart(user_id)
-- ALTER TABLE shopping_cart
-- DROP FOREIGN KEY FK_shopping_cart_user_id_user_id;

-- Foreign Key 설정 SQL - shopping_cart(product_id) -> product(id)
ALTER TABLE shopping_cart
    ADD CONSTRAINT FK_shopping_cart_product_id_product_id FOREIGN KEY (product_id)
        REFERENCES product (id) ON DELETE CASCADE ON UPDATE CASCADE;

-- Foreign Key 삭제 SQL - shopping_cart(product_id)
-- ALTER TABLE shopping_cart
-- DROP FOREIGN KEY FK_shopping_cart_product_id_product_id;


-- board Table Create SQL
-- 테이블 생성 SQL - board
CREATE TABLE board
(
    `id`               INT UNSIGNED    NOT NULL    AUTO_INCREMENT, 
    `nickname`         VARCHAR(15)     NULL, 
    `title`            VARCHAR(40)     NOT NULL, 
    `body`             text            NOT NULL, 
    `view_count`       INT UNSIGNED    NULL        DEFAULT 0, 
    `like_count`  INT UNSIGNED    NULL        DEFAULT 0, 
    `date`             DATETIME        NOT NULL, 
     PRIMARY KEY (id)
);


-- Foreign Key 설정 SQL - post(user_id) -> user(id)
ALTER TABLE board
    ADD CONSTRAINT FK_board_nickname_nickname FOREIGN KEY (nickname)
        REFERENCES user (nickname) ON DELETE SET NULL ON UPDATE CASCADE;

-- Foreign Key 삭제 SQL - board(user_id)
-- ALTER TABLE board
-- DROP FOREIGN KEY FK_board_user_id_user_id;

CREATE TABLE board_like (
    `board_id` INT UNSIGNED    NOT NULL,
    `nickname` VARCHAR(15)     NOT NULL,
    PRIMARY KEY (board_id, nickname),
    FOREIGN KEY (board_id) REFERENCES board (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (nickname) REFERENCES user (nickname) ON DELETE CASCADE ON UPDATE CASCADE
);



insert into board_like (board_id, nickname) values (1, '바나나');
insert into board_like (board_id, nickname) values (2, '바나나');
insert into board_like (board_id, nickname) values (2, '사과');






insert into user (id, password, nickname) values ('banana', 1234, '바나나');
insert into user (id, password, nickname) values ('apple', 1234, '사과');
insert into user (id, password, nickname) values ('peach', 1234, '복숭아');


insert into dog (name, pet_owner, gender, age, breed, weight) values ('happy', 'banana', 'F', 12, '시츄', 5);
insert into dog (name, pet_owner, breed) values ('루키', 'banana', '진돗개');
insert into dog (name, pet_owner, gender, age, breed, weight) values ('삐삐', 'peach', 'F', 3, '닥스훈트', 7);


-- insert into product (title, category, price, amount) values ('소고기 간식', '식품', 20000, 30);
-- insert into product (title, category, choice, price, amount) values ('체크무늬 외출복', '옷', '{\"색상\":[\"빨강\", \"노랑\", \"연두\"], \"사이즈\":[\"S\", \"M\", \"L\"]}', 30000, 20);
-- insert into product (title, category, choice, price, amount) values ('터그 장난감', '장난감', '{\"색상\":[\"파랑\", "\초록\"]}', 20000, 25);

-- insert into shopping_cart (user_id, product_id, choice, amount) values ('banana', 2, '{\"weight\":\"1kg\"}', 1);
-- insert into shopping_cart (user_id, product_id, choice, amount) values ('apple', 42, '{\"size\":\"medium\", }', 1);
-- insert into shopping_cart (user_id, product_id, choice, amount) values ('apple', 42, '{\"size\":\"small\", }', 1);


insert into board (nickname, title, body, date) values ('바나나', '강아지 정보1', '강아지 정보 1 블라블라', '2023-05-01 20:48:00');
insert into board (nickname, title, body, date) values ('바나나', '강아지 정보2', '강아지 정보 2 블라블라', '2023-05-02 20:40:00');
insert into board (nickname, title, body, date) values ('복숭아', '강아지 정보3', '강아지 정보 3 블라블라', '2023-05-03 08:48:00');
insert into board (nickname, title, body, date) values ('사과', '강아지 정보4', '강아지 정보 4 블라블라', '2023-05-03 10:48:00');

show tables;

desc dog;
desc user;
desc shopping_cart;
desc board;
desc product;
desc board_like;

select * from shopping_cart;
select * from board;
select * from product;
select * from dog;
select * from user;
select * from board_like;


-- MySQL 사용자 추가하기
CREATE USER 'admin'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;









-- 데이터 베이스 삭제
-- drop database dog_inf_mall;
-- 계정 삭제
-- drop user admin;
-- SELECT `id`, `title`, `category`, `choice`, `image`, `price` FROM `product`  WHERE `product`.`title` LIKE '%관절%' ORDER BY `product`.`id` DESC LIMIT 16;
-- SELECT `id`, `title`, `category`, `choice`, `image`, `price` FROM `product` AS `product` WHERE `product`.`title` LIKE '%관절%' ORDER BY `product`.`id` DESC LIMIT 16;

-- delete from product;

select * from product where category='강아지 쿠션';

