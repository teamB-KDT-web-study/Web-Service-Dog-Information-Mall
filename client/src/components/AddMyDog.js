import React, { useState, useRef } from "react";
import "../styles/MyPage.scss";
import RegisterYourDog from "../components/RegisterYourDog";

const AddMyDog = () => {
  const [DeleteMyDogForm, setDeleteMyDogForm] = useState(false);
  const [btn, setBtn] = useState("확인");
  const [DogImgFile, setDogImgFile] = useState("");
  const imgRef = useRef();

  const Btn = () => {
    setBtn("확인");
    btn === "수정" ? setBtn("확인") : setBtn("수정");
  };

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
        {DeleteMyDogForm === true ? (
          <RegisterYourDog />
        ) : (
          <div>
            <button
              className="DeleteMyDog"
              onClick={() => {
                setDeleteMyDogForm(!DeleteMyDogForm);
              }}
            >
              ➖
            </button>
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

            <input
              type="file"
              accept="image/*"
              id="MyDogImg"
              onChange={saveDogImgFile}
              ref={imgRef}
            />
            <br />
            <label for="dogName">이름: </label>
            <input id="dogName" style={{ marginLeft: "10px" }} />
            <br />
            <label for="dogBreed">품종: </label>
            <input id="dogBreed" style={{ marginLeft: "10px" }} />
            <br />
            <div className="dogGender">
              <input type="radio" name="pet" id="pet1" />
              <label>수컷</label>
              <input type="radio" name="pet" id="pet2" />
              <label>암컷</label>
            </div>
            <br />
            <label for="dogAge">나이: </label>
            <input type="dogAge" style={{ marginLeft: "10px" }} />
            <br />
            <label for="dogWeight">무게: </label>
            <input type="dogWeight" style={{ marginLeft: "10px" }} />
            <br />
            <button className="SubmitForm" onClick={Btn}>
              {btn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddMyDog;
