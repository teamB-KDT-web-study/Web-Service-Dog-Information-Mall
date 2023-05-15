
import React, { useState, useEffect } from "react";
import "../styles/MyPage.scss";
import EditMyPage from "../pages/EditMyPage";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import TestLogin from "../components/TestLogin";

const MyPage = () => {
  const [myProfile, setMyProfile] = useState([]);
  const [myDog, setMyDog] = useState([]);

  const getMyProfile = async () => {
    const Profile = await axios.get(
      process.env.REACT_APP_DB_HOST + "/member/checkLogin"
    );
    console.log("1", Profile);
    if (!Profile.data.isLogin) {
      return;
    }
    const res = await axios.post(
      process.env.REACT_APP_DB_HOST + "/member/showProfile",
      {
        id: Profile.data.id,
      }
    );
    setMyProfile(res.data.user_data); // 사람데이터를 가져올때 user_data: user_data
    setMyDog(res.data.dog_data);
    console.log("2", res.data);
    // setDogInfo(res.data);


  };
  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <TestLogin />
      <div className="MyPageWrap">
        <div className="MyPageBox">
          <img
            className="ProfileImg"

            src={
              process.env.PUBLIC_URL + `/profile_img/${myProfile.profile_img}`
            }
            alt="ProfileImg"
          />
          <div className="Id" style={{ marginTop: "20px", fontWeight: "bold" }}>
            ID: {myProfile.id}

          </div>
          <div
            className="NickName"
            style={{ marginTop: '20px', fontWeight: 'bold' }}
          >
            닉네임: {myProfile.nickname}
          </div>

          <Link to="/editMyPage">
            <button className="EditMyPage">회원정보 수정</button>
          </Link>
          <Routes>
            <Route path="/editMyPage" element={<EditMyPage />}></Route>
          </Routes>
        </div>
        {/* {dogInfo.map((inf, id) => {
          return (
            <div className="MyDogsPageBox" key={id}>
              <div className="MyDogFormBox">
                <img
                  className="ProfileImg"
                  src={process.env.PUBLIC_URL + 'profile_img/MyDogImg.png'}
                  alt="ProfileImg"
                />
                <div
                  className="DogList"
                  style={{ marginTop: '20px', fontWeight: 'bold' }}
                ></div>
                <div
                  className="DogName"
                  style={{ marginTop: '20px', fontWeight: 'bold' }}
                >
                  이름:{inf.name}
                </div>
                <div
                  className="DogBreed"
                  style={{ marginTop: '20px', fontWeight: 'bold' }}
                >
                  견종:{inf.breed}
                </div>
                <div
                  className="DogGender"
                  style={{ marginTop: '20px', fontWeight: 'bold' }}
                >
                  성별:{inf.gender}
                </div>
                <div
                  className="DogAge"
                  style={{ marginTop: '20px', fontWeight: 'bold' }}
                >
                  나이:{inf.age}
                </div>
                <div
                  className="DogWeight"
                  style={{ marginTop: '20px', fontWeight: 'bold' }}
                >
                  무게:{inf.weight}
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default MyPage;
