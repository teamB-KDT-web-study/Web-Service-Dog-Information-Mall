import "../styles/Register.scss";
import { useState, useRef, useEffect } from "react";
// import RegisterYourDog from "../components/RegisterYourDog";
import AddMyDog from "../components/AddMyDog";
import { API_BASE_URL } from "../containers/app-config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditMyPage = () => {
  const navigate = useNavigate();

  // 상태 관리 초기값 세팅
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickName, setNickName] = useState("");

  // 오류 메세지 전달을 위한 상태값 세팅
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");

  // 유효성 검사하기 위한 세팅
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

  // 조건에 따라 message 값 변경
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용 가능한 아이디 입니다.");
      setIsId(true);
    }
  };
  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setId(currentPw);
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    if (!pwRegExp.test(currentPw)) {
      setPwMessage("영문자+숫자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호 입니다.");
      setIsPw(true);
    }
  };
  const onChangeNickName = (e) => {
    const currentNickName = e.target.value;
    setNickName(currentNickName);

    if (currentNickName.length < 2) {
      setNickNameMessage("닉네임은 2글자 이상으로 입력해주세요.");
      setIsNickName(false);
    } else {
      setNickNameMessage("사용가능한 닉네임 입니다.");
      setIsNickName(true);
    }
  };

  // const [MyDogForm, setMyDogForm] = useState(false);
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  // const [countDogList, setCountDogList] = useState([0]);
  const [countDogList, setCountDogList] = useState([
    {
      id: 0,
      name: "",
      breed: "",
      gender: "",
      age: "",
      weight: "",
    },
  ]);

  useEffect(() => {
    console.log(countDogList);
  });

  // 강아지 폼 추가
  const onAddDogForm = () => {
    // let countArr = [...countDogList];
    // console.log("countArr 1", countArr);
    // console.log("countArr 1", countArr.slice(-1));
    // console.log("countArr 1", countArr.slice(-1)[0]);

    // let counter = countArr.slice(-1)[0];
    // // counter += 1;
    // console.log("counter", counter);
    // // counter.id = counter.length - 1;
    // countArr.push(counter);
    // console.log("countArr 2", countArr);
    const newData = {
      id: countDogList.length,
      list: "",
      name: "",
      breed: "",
      gender: "",
      age: "",
      weight: "",
    };
    setCountDogList([...countDogList, newData]);
  };

  // 프로필 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const deleteCountDogList = (targetFormId) => {
    const newCountDogList = countDogList.filter((item) => {
      return item.id !== targetFormId;
    });

    setCountDogList(newCountDogList);
  };

  // 회원 수정 버튼 클릭시 백으로 전송
  const onEditMyPage = async () => {
    const res = await axios.patch(API_BASE_URL + "/member/profileEdit", {
      id: id,
      pw: pw,
      nickName: nickName,
    });
    onEditMyPage();
    navigate("/MyPage");
  };

  // 회원 탈퇴 버튼 클릭시 백으로 전송
  const onDeleteMyProfile = async (targetProfile) => {
    // e.preventDefault();
    // const res = await axios.delete(API_BASE_URL + "/member/signout", {
    //   id: id,
    // });

    if (window.confirm("정말 탈퇴를 하시겠습니까?")) {
      await axios
        .delete(API_BASE_URL + "/member/signout", { id: "id" })
        .then(() => {
          alert("그동안 이용해주셔서 감사합니다.");
          navigate("/");
        });
      console.log(onDeleteMyProfile.data);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="RegisterWrap">
        <form className="RegisterBox">
          <h1>회원정보 수정</h1>
          <form>
            <div className="ImgFormBox">
              <div className="MyProfileImg">
                <img
                  src={
                    imgFile
                      ? imgFile
                      : process.env.PUBLIC_URL + "ProFileImg/ProfileImg.jpg"
                  }
                  alt="프로필 이미지"
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
                  id="profileImg"
                  onChange={saveImgFile}
                  ref={imgRef}
                  style={{ border: "none" }}
                />
              </div>
            </div>
            <div className="formBox">
              <label htmlFor="loginId">ID</label>

              <input
                type="text"
                name="UserId"
                id="loginId"
                onChange={onChangeId}
                placeholder=""
                style={{ border: "none", backgroundColor: "white" }}
                disabled
              />

              <p className="message">{idMessage}</p>
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">PASSWORD</label>

              <input
                type="password"
                name="UserPw"
                id="loginPw"
                placeholder="Password를 입력해주세요"
                onChange={onChangePw}
                required
              />
              <p className="message">{pwMessage}</p>
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">NiCKNAME</label>

              <input
                type="text"
                name="UserNickName"
                id="nickname"
                placeholder="nickname을 입력해주세요"
                onChange={onChangeNickName}
                required
              />
              <p className="message">{nickNameMessage}</p>
            </div>
            <h2>강아지 정보</h2>
            <div className="RegisterYourDog"></div>
            {/* <div className="formBox">
              <div>
                {MyDogForm === true ? <AddMyDog /> : <RegisterYourDog />}
                <br />
                <button
                  className="AddMyDog"
                  onClick={() => {
                    setMyDogForm(!MyDogForm);
                  }}
                >
                  ➕
                </button>
              </div>
            </div> */}
            <div className="formBox">
              <div>
                {countDogList?.map((dog) => (
                  <AddMyDog
                    key={dog.id}
                    dog={dog}
                    deleteCountDogList={deleteCountDogList}
                  />
                ))}
                <div className="onAddDogFormParent">
                  <button
                    className="onAddDogForm"
                    onClick={onAddDogForm}
                    type="button"
                    disabled={countDogList.length > 4} // 강아지 등록 폼 최대 5개까지만
                  >
                    ➕
                  </button>
                </div>
              </div>
            </div>
            <button type="button" className="EditMyPage" onClick={onEditMyPage}>
              수정 완료
            </button>
            <button className="DeleteMyProfile" onClick={onDeleteMyProfile}>
              회원 탈퇴
            </button>
          </form>
        </form>
      </div>
    </>
  );
};

export default EditMyPage;
