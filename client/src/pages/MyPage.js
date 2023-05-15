import React, { useState, useEffect } from "react";
import "../styles/MyPage.scss";
import EditMyPage from "../pages/EditMyPage";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import TestLogin from "../components/TestLogin";

const MyPage = ({ getSession }) => {
  const [myProfile, setMyProfile] = useState(["a"]);
  const [myDog, setMyDog] = useState(["a"]);
  const [readOnly, setReadOnly] = useState(true);
  const navigate = useNavigate();

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
    // setMyDog(res.data);
  };
  useEffect(() => {
    getMyProfile();
  }, []);

  const updateItem = async (targetItem) => {
    console.log(targetItem);
    await axios.patch(
      process.env.REACT_APP_DB_HOST + "/member/profileEdit",
      targetItem
    );
  };

  const offReadOnlyMode = () => {
    setReadOnly(false); // input이 편집이 가능한 상태
  };

  // 사용자가 키보드 입력할 때마다 item의 title을 입력한 값으로 변경
  const editEventHandler = (e) => {
    // const { ...myProfile } = myProfile.;
    // const { ...myDog } = myDog;

    setMyProfile({
      nickname: e.target.value,
      ...myProfile,
    });
    setMyDog({
      name: e.target.value,
      ...myDog,
    });
  };
  // input에서 enter키; readOnly state를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      updateItem(myProfile); // text input에서 enter 누르면 수정 완료
      updateItem(myDog); // text input에서 enter 누르면 수정 완료
    }
  };

  const changeStatus = (category1, category2, e) => {
    console.log(e.target.classList);
  };

  const onDeleteMyProfile = async () => {
    // e.preventDefault();
    // const res = await axios.delete(process.env.REACT_APP_DB_HOST + "/member/signout", {
    //   id: id,
    // });

    if (window.confirm("정말 탈퇴를 하시겠습니까?")) {
      console.log("targetProfile >>>>>>>>>", myProfile.id);
      await axios
        .delete(process.env.REACT_APP_DB_HOST + "/member/signout", {
          data: { id: myProfile.id },
        })
        .then((res) => {
          if (res.data.isOk) {
            alert("그동안 이용해주셔서 감사합니다.");
            getSession();
            // setUserId({ isLogin: false });
            navigate("/");
          }
        });
    } else {
      return;
    }
  };

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
          {/* <div>
            {"password" === "true" ? (
              <div
                className="NickName"
                style={{
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                닉네임:
                <input type="text" value={`${myProfile.nickname}`} />
              </div>
            ) : (
              <h2></h2>
            )}
          </div> */}

          <div
            className="NickName"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            닉네임:{" "}
            <input
              type="text"
              onClick={offReadOnlyMode}
              onKeyPress={enterKeyEventHandler}
              onChange={(e) => {
                changeStatus("user", "nickname", e);
              }}
              value={`${myProfile.nickname}`}
              style={{ border: "none" }}
            />
          </div>

          <Link to="/EditMyPage">
            <button className="EditMyPage">회원정보 수정</button>
          </Link>
          <Routes>
            <Route path="/EditMyPage" element={<EditMyPage />}></Route>
          </Routes>
          <button className="DeleteMyProfile" onClick={onDeleteMyProfile}>
            회원 탈퇴
          </button>
        </div>
        {myDog.map((inf, id) => {
          return (
            <div className="MyDogsPageBox" key={id}>
              <div className="MyDogFormBox">
                <img
                  className="ProfileImg"
                  src={process.env.PUBLIC_URL + "profile_img/MyDogImg.png"}
                  alt="ProfileImg"
                />
                <div
                  className="DogList"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                ></div>
                <div
                  className="DogName"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                >
                  이름:
                  <input
                    classList={`name${id + 1}`}
                    type="text"
                    onClick={offReadOnlyMode}
                    onKeyPress={enterKeyEventHandler}
                    onChange={(e) => {
                      changeStatus("dog", "name", e);
                    }}
                    value={`${inf.name}`}
                    style={{ border: "none", backgroundColor: "#ecd06f" }}
                  />
                </div>
                <div
                  className="DogBreed"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                >
                  견종:
                  <input
                    classList={`breed${id + 1}`}
                    type="text"
                    onClick={offReadOnlyMode}
                    onKeyPress={enterKeyEventHandler}
                    onChange={(e) => {
                      changeStatus("dog", "breed", e);
                    }}
                    value={`${inf.breed}`}
                    style={{ border: "none", backgroundColor: "#ecd06f" }}
                  />
                </div>
                <div
                  className="DogGender"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                >
                  성별:
                  <input
                    classList={`gender${id + 1}`}
                    type="text"
                    onClick={offReadOnlyMode}
                    onKeyPress={enterKeyEventHandler}
                    onChange={editEventHandler}
                    value={`${inf.gender}`}
                    style={{ border: "none", backgroundColor: "#ecd06f" }}
                  />
                </div>
                <div
                  className="DogAge"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                >
                  나이:
                  <input
                    classList={`age${id + 1}`}
                    type="text"
                    onClick={offReadOnlyMode}
                    onKeyPress={enterKeyEventHandler}
                    onChange={editEventHandler}
                    value={`${inf.age}`}
                    style={{ border: "none", backgroundColor: "#ecd06f" }}
                  />
                </div>
                <div
                  className="DogWeight"
                  style={{ marginTop: "20px", fontWeight: "bold" }}
                >
                  무게:
                  <input
                    classList={`weight${id + 1}`}
                    type="text"
                    onClick={offReadOnlyMode}
                    onKeyPress={enterKeyEventHandler}
                    onChange={editEventHandler}
                    value={`${inf.weight}`}
                    style={{ border: "none", backgroundColor: "#ecd06f" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyPage;
