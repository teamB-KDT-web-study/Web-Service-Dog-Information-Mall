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
    speed: 500, // 0.5초
    slidesToShow: 3, // 한 화면에 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한번에 넘어가는 콘텐츠 수
    autoplay: true,
    swipeToSlide: true, // 마우스로 끌기 가능
    centerMode: true,
    centerPadding: "60px", // 센터에 오는 이미지 패딩값
    nextArrow: <SlickNextArrow />, // 이전 콘텐츠
    prevArrow: <SlickPrevArrow />, // 다음 콘텐츠
  };

  const dogsList = [
    {
      id: 1,
      img: process.env.PUBLIC_URL + "/SlickImages/dog1.png",
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 2,
      breed: "Toy Poodle",
      color: "white",
      information: "소형견",
    },
    {
      id: 3,
      breed: "Yorkshire",
      color: "white",
      information: "소형견",
    },
    {
      id: 4,
      breed: "Pomeranian",
      color: "white",
      information: "소형견",
    },
    {
      id: 5,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 6,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 7,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 8,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 9,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 10,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 11,
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 12,
      breed: "Maltese",
      color: "white",
      information: "소형견",
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
        height: "100vh",
      }}
    >
      <div>
        <h2>Dog breeds</h2>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog1.png"}
              alt="1"
              id="1"
              onClick={() => clickDogs(1)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog2.png"}
              alt="2"
              id="2"
              onClick={() => clickDogs(2)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog3.png"}
              alt="3"
              id="3"
              onClick={() => clickDogs(3)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog4.png"}
              alt="4"
              id="4"
              onClick={() => clickDogs(4)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="5"
              id="5"
              onClick={() => clickDogs(5)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="6"
              id="6"
              onClick={() => clickDogs(6)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="7"
              id="7"
              onClick={() => clickDogs(7)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="8"
              id="8"
              onClick={() => clickDogs(8)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="9"
              id="9"
              onClick={() => clickDogs(9)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="10"
              id="10"
              onClick={() => clickDogs(10)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="11"
              id="11"
              onClick={() => clickDogs(11)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px" }}
              src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
              alt="12"
              id="12"
              onClick={() => clickDogs(12)}
            />
          </div>
        </Slider>
        {dogsInformation.id !== 0 ? (
          <div>
            <div key={dogsInformation.id} className="Slick">
              <img src={dogsInformation.img} className="Slickimg" />
              <div className="Slickbox">종 이름: {dogsInformation.breed}</div>
              <div className="Slickbox">색상: {dogsInformation.color}</div>
              <div className="Slickbox">
                정보: {dogsInformation.information}
              </div>
            </div>
          </div>
        ) : (
          <h2> 궁금한 강아지를 선택해주세요! </h2>
        )}
      </div>
    </div>
  );
};

export default SlickSlider;
