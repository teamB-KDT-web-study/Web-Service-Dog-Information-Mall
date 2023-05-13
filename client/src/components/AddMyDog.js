import React, { useState, useRef, useEffect } from "react";
import "../styles/MyPage.scss";
import { useAsyncError } from "react-router-dom";
// import RegisterYourDog from "../components/RegisterYourDog";

const AddMyDog = (props) => {
  useEffect(() => {
    console.log("add my dog render");
    console.log("dog >>>>", dog);
  });

  const { dog, deleteCountDogList, handleDogForm, formId } = props;
  const [DogImgFile, setDogImgFile] = useState("");
  const imgRef = useRef();

  const [dogInf, setDogInf] = useState([
    {
      name: "",
      breed: "",
      gender: "",
      age: "",
      weight: "",
    },
  ]);
  const handleChange = (e, formId) => {
    setDogInf({ ...dogInf, [e.target.id]: e.target.value });
    handleDogForm(dogInf, formId);

    // console.log({
    //   [e.target.id]: e.target.value,
    // });
    // console.log(dog);
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

  // 강아지 폼 삭제
  const onDeleteDogForm = (idx) => {
    deleteCountDogList(idx);
  };

  return (
    <div className="formBox">
      <br />
      <div>
        <div>
          <div>
            <button
              className="DeleteMyDog"
              onClick={() => onDeleteDogForm(dog.id)}
              type="button"
            >
              ➖
            </button>
            <div className="ImgFormBox">
              <div className="MyProfileImg">
                <img
                  src={
                    DogImgFile
                      ? DogImgFile
                      : process.env.PUBLIC_URL + "profile_img/MyDogImg.png"
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

            <label for="dogList"></label>
            <input
              id="dogList"
              style={{ marginLeft: "10px", border: "none" }}
              value={dog.list}
              onChange={(e) => handleChange(e, formId)}
            />
            <br />
            <label for="dogName">이름: </label>
            <input
              id="name"
              type="text"
              style={{ marginLeft: "10px" }}
              onChange={(e) => handleChange(e, formId)}
            />
            <br />
            <label for="dogBreed">견종: </label>
            <input
              type="text"
              id="breed"
              style={{ marginLeft: "10px" }}
              onChange={(e) => handleChange(e, formId)}
            />
            <br />
            <div className="dogGender">
              <label for="dogBreed">성별: </label>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="M"
                onChange={(e) => handleChange(e, formId)}
              />
              <label>수컷</label>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="F"
                onChange={(e) => handleChange(e, formId)}
              />
              <label>암컷</label>
            </div>

            <label for="dogAge">나이: </label>
            <input
              type="text"
              id="age"
              style={{ marginLeft: "10px" }}
              onChange={(e) => handleChange(e, formId)}
            />
            <br />
            <label for="dogWeight">무게: </label>
            <input
              type="text"
              id="weight"
              style={{ marginLeft: "10px" }}
              onChange={(e) => handleChange(e, formId)}
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMyDog;
