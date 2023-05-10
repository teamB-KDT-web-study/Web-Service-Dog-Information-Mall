import "../styles/Login.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("/Login")
        .then((res) => console.log(res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );

  return (
    <>
      <div className="LoginWrap">
        <div className="LoginBox">
          <h1>로고</h1>
          <form>
            <div className="formBox">
              <label htmlFor="loginId">ID</label>
              <input
                type="text"
                name="loginId"
                id="loginId"
                value={inputId}
                placeholder="ID를 입력해주세요"
                onChange={handleInputId}
              />
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">PASSWORD</label>
              <input
                type="password"
                name="loginPw"
                id="loginPw"
                placeholder="Password를 입력해주세요"
                value={inputPw}
                onChange={handleInputPw}
              />
            </div>
            <button type="button">Login</button>
          </form>
          <button type="button" className="link" onClick={onClickLogin}>
            Resister
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
