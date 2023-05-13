import React, { useState, useEffect } from "react";
import "../styles/MyPage.scss";
import EditMyPage from "../pages/EditMyPage";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";

const MyPage = () => {
  const [myProfile, setMyProfile] = useState([]);

  // useEffect(() => {
  //   const getMyProfile = async () => {
  //     const req = await axios.post((process.env.REACT_APP_DB_HOST = "/member/showProfile"));
  //     setMyProfile(req.data);
  //   };
  // });

  return (
    <>
      <div className="MyPageWrap">
        <div className="MyPageBox">
          <img
            className="ProfileImg"
            src={process.env.PUBLIC_URL + "profile_img/default.jpg"}
            alt="ProfileImg"
          />
          <div className="Id" style={{ marginTop: "20px", fontWeight: "bold" }}>
            ID:
            {myProfile.map((id) => {
              return (id = { id });
            })}
          </div>
          <div
            className="NickName"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            닉네임:
          </div>

          <Link to="/editMyPage">
            <button className="EditMyPage">회원정보 수정</button>
          </Link>

          <Routes>
            <Route path="/editMyPage" element={<EditMyPage />}></Route>
          </Routes>
        </div>

        <div className="MyDogsPageBox">
          <div className="MyDogFormBox">
            <img
              className="ProfileImg"
              src={process.env.PUBLIC_URL + "profile_img/MyDogImg.png"}
              alt="ProfileImg"
            />
            <div
              className="DogList"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              DogList
            </div>
            <div
              className="DogName"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              이름:
            </div>
            <div
              className="DogBreed"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              견종:
            </div>
            <div
              className="DogGender"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              성별:
            </div>
            <div
              className="DogAge"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              나이:
            </div>
            <div
              className="DogWeight"
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              무게:
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
