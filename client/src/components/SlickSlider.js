import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import SlickNextArrow from "./SlickNextArrow";
import SlickPrevArrow from "./SlickPrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slickslider.scss";

const SlickSlider = () => {
  const settings = {
    className: "center",
    dots: true, // 지정 콘텐츠로 바로 이동할 수 있는 버튼(점)
    infinite: true, // 콘텐츠 끝까지 갔을 때 다음 콘텐츠를 처음 콘텐츠로 가져와 반복
    speed: 5000, // 0.5초
    slidesToShow: 5, // 한 화면에 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한번에 넘어가는 콘텐츠 수
    // autoplay: true,
    swipeToSlide: true, // 마우스로 끌기 가능
    centerMode: true,
    centerPadding: "60px", // 센터에 오는 이미지 패딩값
    nextArrow: <SlickNextArrow />, // 이전 콘텐츠
    prevArrow: <SlickPrevArrow />, // 다음 콘텐츠
  };

  const dogsList = [
    {
      id: 1,
      img: process.env.PUBLIC_URL + "/SlickImages/말티즈.jpeg",
      breed: "말티즈",
      mind: "예민해요",
      color: "white",
      information: "소형견",
    },
    {
      id: 2,

      img: process.env.PUBLIC_URL + "/SlickImages/푸들.jpeg",
      breed: "토이 푸들",
      mind: "친화력이 좋아요",
      color: "white",
      information: "소형견",
    },
    {
      id: 3,

      img: process.env.PUBLIC_URL + "/SlickImages/화이트테리어.jpeg",
      breed: "요크셔테리어",
      mind: "예민해요",
      color: "white",
      information: "소형견",
    },
    {
      id: 4,
      img: process.env.PUBLIC_URL + "/SlickImages/포메라니안.jpeg",
      breed: "포메라니안",
      mind: "예민해요",
      color: "white",
      information: "소형견",
    },
    {
      id: 5,
      img: process.env.PUBLIC_URL + "/SlickImages/치와와.jpeg",
      breed: "치와와",
      mind: "예민해요",
      color: "white",
      information: "소형견",
    },
    {
      id: 6,
      breed: "시츄",
      img: process.env.PUBLIC_URL + "/SlickImages/시츄.jpeg",
      mind: "친화력이 좋아요",
      color: "white",
      information: "소형견",
    },
    // {
    //   id: 7,
    //   img: process.env.PUBLIC_URL + "/SlickImages/dog1.png",
    //   breed: "스피츠",
    //   mind: "예민해요",
    //   color: "white",
    //   information: "중형견",
    // },
    {
      id: 7,
      img: process.env.PUBLIC_URL + "/SlickImages/보더콜리.jpeg",
      breed: "보더콜리",
      mind: "활동적이에요",
      color: "white",
      information: "중형견",
    },
    {
      id: 8,
      img: process.env.PUBLIC_URL + "/SlickImages/웰시코기.jpeg",
      breed: "웰시코기",
      mind: "친화력이 좋아요",
      color: "white",
      information: "중형견",
    },
    {
      id: 9,
      img: process.env.PUBLIC_URL + "/SlickImages/골든리트리버.jpeg",
      breed: "골든리트리버",
      mind: "친화력이 좋아요",
      color: "white",
      information: "대형견",
    },
    {
      id: 10,
      img: process.env.PUBLIC_URL + "/SlickImages/사모예드.jpeg",
      breed: "사모예드",
      mind: "친화력이 좋아요",
      color: "white",
      information: "대형견",
    },
    {
      id: 11,
      img: process.env.PUBLIC_URL + "/SlickImages/도베르만.jpeg",
      breed: "도베르만",
      mind: "활동적이에요",
      color: "black",
      information: "대형견",
    },
  ]; // 강아지 목록 배열
  const [dogsInformation, setDogsInformation] = useState({ id: 0 }); // 클릭 결과 배열 state

  const clickDogs = (id) => {
    console.log("이미지 클릭");

    setDogsInformation(dogsList[id - 1]); // 0부터 시작하기 때문
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ffffff",
        height: "max-content",
      }}
    >
      <div>
        <Slider {...settings}>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/말티즈.jpg"}
              alt="1"
              id="1"
              onClick={() => clickDogs(1)}
            />
          </div>
          <div>
            <img
              style={{ width: "15vw", height: "15vw", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/토이푸들.jpg"}
              alt="2"
              id="2"
              onClick={() => clickDogs(2)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={
                process.env.PUBLIC_URL + "/SlickImages/slider/요크셔테리어.jpg"
              }
              alt="3"
              id="3"
              onClick={() => clickDogs(3)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={
                process.env.PUBLIC_URL + "/SlickImages/slider/포메라니안.jpg"
              }
              alt="4"
              id="4"
              onClick={() => clickDogs(4)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/치와와.jpg"}
              alt="5"
              id="5"
              onClick={() => clickDogs(5)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/시츄.jpg"}
              alt="6"
              id="6"
              onClick={() => clickDogs(6)}
            />
          </div>
          {/* <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/스피츠.jpg"}
              alt="7"
              id="7"
              onClick={() => clickDogs(7)}
            />
          </div> */}
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/보더콜리.jpg"}
              alt="7"
              id="7"
              onClick={() => clickDogs(7)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/웰시코기.jpg"}
              alt="8"
              id="8"
              onClick={() => clickDogs(8)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={
                process.env.PUBLIC_URL + "/SlickImages/slider/골든리트리버.jpg"
              }
              alt="9"
              id="9"
              onClick={() => clickDogs(9)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/사모예드.jpg"}
              alt="10"
              id="10"
              onClick={() => clickDogs(10)}
            />
          </div>
          <div>
            <img
              style={{
                width: "15vw",
                height: "15vw",
                objectFit: "contain",
              }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/도베르만.png"}
              alt="11"
              id="11"
              onClick={() => clickDogs(11)}
            />
          </div>
        </Slider>
        <div className="Slickback">
          {dogsInformation.id !== 0 ? (
            <div>
              <div key={dogsInformation.id} className="Slick">
                <div className="slickimg">
                  <img src={dogsInformation.img} className="Slickimg" />
                </div>
                <div className="slickinfo">
                  <div className="Slickbox">
                    종 이름: {dogsInformation.breed}
                  </div>
                  <div className="Slickbox">색상: {dogsInformation.color}</div>
                  <div className="Slickbox">성격: {dogsInformation.mind}</div>
                  <div className="Slickbox">
                    크기: {dogsInformation.information}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h2> 궁금한 강아지를 선택해주세요! </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
