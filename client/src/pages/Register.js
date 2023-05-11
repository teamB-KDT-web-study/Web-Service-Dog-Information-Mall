import "../styles/Register.scss";
import { useState, useRef, useEffect } from "react";
import RegisterYourDog from "../components/RegisterYourDog";
import AddMyDog from "../components/AddMyDog";
import { API_BASE_URL } from "../containers/app-config";
import axios from "axios";

const Register = () => {
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

  const [MyDogForm, setMyDogForm] = useState(false);
  const [imgFile, setImgFile] = useState("");

  const imgRef = useRef();

  // 프로필 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  // 회원가입 버튼 클릭시 백으로 전송
  const SubmitRegister = async () => {
    const res = await axios.post(API_BASE_URL + "/member/signup");
  };

  return (
    <>
      <div className="RegisterWrap">
        <form className="LoginBox">
          <h1>회원가입</h1>
          <form>
            <div className="formBox">
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

              <input
                type="file"
                accept="image/*"
                id="profileImg"
                onChange={saveImgFile}
                ref={imgRef}
                style={{ border: "none" }}
              />
            </div>

            <div className="formBox">
              <label htmlFor="loginId">ID</label>
              <input
                type="text"
                name="UserId"
                id="loginId"
                placeholder="ID를 입력해주세요"
                onChange={onChangeId}
                required
              />
              <button>중복검사</button>
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
            <div className="formBox">
              <div>
                {MyDogForm === true ? <AddMyDog /> : <RegisterYourDog />}
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
            </div>
            <button
              type="submit"
              className="SubmitRegister"
              onClick={SubmitRegister}
            >
              회원가입
            </button>
          </form>
        </form>
      </div>
    </>
  );
};

export default Register;
