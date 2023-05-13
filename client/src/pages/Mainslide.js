import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/mainslide.scss";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Mainslide = () => {
  return (
    <div className="Mainslide">
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "55vw" }}
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/SlickImages/mainslide1.jpg"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "55vw" }}
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/SlickImages/mainslide2.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "55vw" }}
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/SlickImages/mainslide3.jpg"}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Mainslide;
