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
      img: process.env.PUBLIC_URL + "/SlickImages/slider/말티즈.jpg",
      breed: "말티즈",
      color: "white",
      information: "소형견",
    },
    {
      id: 2,

      img: process.env.PUBLIC_URL + "/SlickImages/slider/토이푸들.jpg",
      breed: "토이 푸들",

      color: "white",
      information: "소형견",
    },
    {
      id: 3,

      img: process.env.PUBLIC_URL + "/SlickImages/slider/요크셔테리어.jpg",
      breed: "요크셔테리어",

      color: "white",
      information: "소형견",
    },
    {
      id: 4,

      breed: "포메라니안",

      color: "white",
      information: "소형견",
    },
    {
      id: 5,

      breed: "치와와",
      height: "약 13~20cm",
      weight: "약 3kg 미만",
      information:
        "세계에서 가장 체구가 작은 견종으로 멕시코의 가장 넓은 주 치와와주에서 이름을 따온 강아지! \n 앞서 말했듯이 다른 견종에 비해 크기가 매우 작고 애교도 많은 애교덩어리 견종으로 사랑받고 있어요. \n 성격은 쾌활하고 애교가 많지만 생긴 모습과 반대로 자립심도 강하고 용기도 대단한 견종이예요. \n 재빠르기도 꽤나 재빠른 편이라 산책도 자주 시켜주는게 좋지만 체구가 작기 때문에 큰 실내에서도 운동이 되는 편이예요. \n 치와와는 장모종, 단모종으로 두 종류 모두 털빠짐이 있는 편이고 장모종은 빗질을 자주 해줘야 해요. \n 또한, 강아지가 체구가 워낙 작다보니 그만큼 슬개골이 약한 편이라 슬개골 탈구에 특히나 신경을 써줘야 해요.",
    },
    {
      id: 6,
      breed: "시츄",

      img: process.env.PUBLIC_URL + "/SlickImages/dog1.png",
      breed: "Maltese",
      color: "white",
      information: "소형견",
    },
    {
      id: 6,
      img: process.env.PUBLIC_URL + "/SlickImages/dog1.png",
      breed: "Maltese",

      color: "white",
      information: "소형견",
    },
    {
      id: 7,

      breed: "스피츠",

      color: "white",
      information: "중형견",
    },
    {
      id: 8,

      breed: "보더콜리",

      color: "white",
      information: "중형견",
    },
    {
      id: 9,

      breed: "웰시코기",

      color: "white",
      information: "중형견",
    },
    {
      id: 10,

      breed: "골든리트리버",

      color: "white",
      information: "대형견",
    },
    {
      id: 11,

      breed: "사모예드",

      color: "white",
      information: "대형견",
    },
    {
      id: 12,

      breed: "도베르만",

      color: "white",
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
        height: "100vh",
      }}
    >
      <div>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/말티즈.jpg"}
              alt="1"
              id="1"
              onClick={() => clickDogs(1)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/토이푸들.jpg"}
              alt="2"
              id="2"
              onClick={() => clickDogs(2)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
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
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
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
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/치와와.jpg"}
              alt="5"
              id="5"
              onClick={() => clickDogs(5)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/시츄.jpg"}
              alt="6"
              id="6"
              onClick={() => clickDogs(6)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/스피츠.jpg"}
              alt="7"
              id="7"
              onClick={() => clickDogs(7)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/보더콜리.jpg"}
              alt="8"
              id="8"
              onClick={() => clickDogs(8)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/웰시코기.jpg"}
              alt="9"
              id="9"
              onClick={() => clickDogs(9)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={
                process.env.PUBLIC_URL + "/SlickImages/slider/골든리트리버.jpg"
              }
              alt="10"
              id="10"
              onClick={() => clickDogs(10)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/사모예드.jpg"}
              alt="11"
              id="11"
              onClick={() => clickDogs(11)}
            />
          </div>
          <div>
            <img
              style={{ width: "500px", height: "500px", objectFit: "contain" }}
              src={process.env.PUBLIC_URL + "/SlickImages/slider/도베르만.png"}
              alt="12"
              id="12"
              onClick={() => clickDogs(12)}
            />
          </div>
        </Slider>
        {dogsInformation.id !== 0 ? (
          <div>
            <div key={dogsInformation.id} className="Slick">
              <div className="slickimg">
                <img src={dogsInformation.img} className="Slickimg" />
              </div>
              <div className="slickinfo">
                <div className="Slickbox">이름: {dogsInformation.breed}</div>
                <div className="Slickbox">색상: {dogsInformation.color}</div>
                <div className="Slickbox">
                  정보: {dogsInformation.information}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2> 궁금한 강아지를 클릭해주세요! </h2>
        )}
      </div>
    </div>
  );
};

export default SlickSlider;
