import React, { useState } from "react";
import "../styles/MyPage.scss";
import AddMyDog from "../components/AddMyDog";
import EditMyPage from "../pages/EditMyProfile";
import RegisterYourDog from "../components/RegisterYourDog";
import { Link, Routes, Route } from "react-router-dom";
import EditMyProfile from "../pages/EditMyProfile";

const MyPage = () => {
  const [MyDogForm, setMyDogForm] = useState(false);
  // const [FormCount, setFormCount] = useState([0]);

  // const newForm = {}; // FormCount state 배열에 새로 추가할 요소

  //  setFormCount([...FormCount, newForm]);

  return (
    <>
      <div className="MyPageWrap">
        <div className="MyPageBox">
          <img
            className="ProfileImg"
            src={process.env.PUBLIC_URL + "ProFileImg/ProfileImg.jpg"}
            alt="ProfileImg"
          />
          <div
            className="NickName"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            닉네임
          </div>
          <Link to="/editMyProfile">
            <button className="EditMyPage">회원수정</button>
          </Link>
          <Routes>
            <Route path="/editMyPage" element={<EditMyProfile />}></Route>
          </Routes>
        </div>
        <div className="MyDogsPageBox">
          <div className="MyDogFormBox">
            <div>{MyDogForm === true ? <AddMyDog /> : <RegisterYourDog />}</div>
            {/* <div>
               {FormCount.map((value) => {
                return <AddMyDog key={value} />;
              })}
            </div> */}
          </div>
        </div>
        <br />

        <button
          className="AddMyDog"
          onClick={() => {
            setMyDogForm(!MyDogForm);
            // FormCount();
          }}
        >
          ➕
        </button>
      </div>
    </>
  );
};

export default MyPage;
