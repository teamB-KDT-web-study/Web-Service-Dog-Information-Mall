import styled from "styled-components";
import MapComponent from "../components/MapComponent";
import React from "react";

const Map = () => {
  return (
    <>
      {/* <Main> */}
        {/* <div className="kakaoMap middle2"> */}
          {/* <div className="common"> */}
            <MapComponent />
          {/* </div> */}
        {/* </div> */}
      {/* </Main> */}
    </>
  );
};


const Main = styled.div`
  background-size: 100%;
  background-image: ${(props) => `url(${props.imgUrl})`};
  min-height: 100vh;
  padding: 15% 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .middle2 {
    width: 80%;
    margin-bottom: 80px;
    text-align: basis;
    // width: 80%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 8px 32px #ecd06f;
    backdrop-filter: blur(2.5px);
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    padding: 20px;
  }
`;

export default Map;
