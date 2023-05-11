import React, { useState, useRef } from "react";
import "../styles/MyPage.scss";
import RegisterYourDog from "../components/RegisterYourDog";

const AddMyDog = (props) => {
  const [DogImgFile, setDogImgFile] = useState("");
  const imgRef = useRef();

  // 강아지 이미지 업로드 input의 onChange
  const saveDogImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setDogImgFile(reader.result);
    };
  };

  return (
    <div className="formBox">
      <br />
      <div>
        {/* {DeleteMyDogForm === true ? (
          <RegisterYourDog />
        ) : ( */}
        <div>
          {props.countDogList &&
            props.countDogList.map((item, i) => (
              <div key={i}>
                <button className="DeleteMyDog">➖</button>
                <div className="ImgFormBox">
                  <div className="MyProfileImg">
                    <img
                      src={
                        DogImgFile
                          ? DogImgFile
                          : process.env.PUBLIC_URL + "ProFileImg/MyDogImg.png"
                      }
                      alt="강아지 이미지"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className="MyProfileImgSelect">
                    <input
                      type="file"
                      accept="image/*"
                      id="MyDogImg"
                      onChange={saveDogImgFile}
                      ref={imgRef}
                      style={{ border: "none" }}
                    />
                  </div>
                </div>

                <label for="dogName">이름: </label>
                <input id="dogName" style={{ marginLeft: "10px" }} />
                <br />
                <label for="dogBreed">품종: </label>
                <input id="dogBreed" style={{ marginLeft: "10px" }} />
                <br />
                <div className="dogGender">
                  <label for="dogBreed">성별: </label>
                  <input type="radio" name="pet" id="pet1" />
                  <label>수컷</label>
                  <input type="radio" name="pet" id="pet2" />
                  <label>암컷</label>
                </div>

                <label for="dogAge">나이: </label>
                <input type="dogAge" style={{ marginLeft: "10px" }} />
                <br />
                <label for="dogWeight">무게: </label>
                <input type="dogWeight" style={{ marginLeft: "10px" }} />
                <br />
              </div>
            ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default AddMyDog;
