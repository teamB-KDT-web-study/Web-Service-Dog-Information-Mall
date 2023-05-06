import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/slick/slick.css";
// import "../styles/slick/slick-theme.scss";
import SlickNextArrow from "../components/SlickNextArrow";
import SlickPrevArrow from "../components/SlickPrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SlickSlider extends Component {
  render() {
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
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#ffffff",
          height: "100vh",
        }}
      >
        <div>
          <h2>Kind of Dogs</h2>
          <Slider {...settings}>
            <div>
              <img
                style={{ width: "500px", height: "500px" }}
                src={process.env.PUBLIC_URL + "/SlickImages/dog1.png"}
                alt="1"
              />
            </div>
            <div>
              <img
                style={{ width: "500px", height: "500px" }}
                src={process.env.PUBLIC_URL + "/SlickImages/dog2.png"}
                alt="2"
              />
            </div>
            <div>
              <img
                style={{ width: "500px", height: "500px" }}
                src={process.env.PUBLIC_URL + "/SlickImages/dog3.png"}
                alt="3"
              />
            </div>
            <div>
              <img
                style={{ width: "500px", height: "500px" }}
                src={process.env.PUBLIC_URL + "/SlickImages/dog4.png"}
                alt="4"
              />
            </div>
            <div>
              <img
                style={{ width: "500px", height: "500px" }}
                src={process.env.PUBLIC_URL + "/SlickImages/dog5.png"}
                alt="5"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
