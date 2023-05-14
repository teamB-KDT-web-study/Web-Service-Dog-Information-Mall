import "../styles/Login.scss";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../containers/app-config";

const Login = ({ getSession }) => {
  const navigate = useNavigate();
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const idRef = useRef();
  const pwRef = useRef();

  function onEnter(e) {
    if (e.key === "Enter") {
      onClickLogin();
    }
  }

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    const getLogin = async () => {
      const res = await axios.post(API_BASE_URL + "/member/login", {
        id: id,
        pw: pw,
      });
      if (res.data.success) {
        navigate("/");
        getSession();
      } else {
        alert("정보가 일치하지 않습니다");
        idRef.current.focus();
        return;
      }
    };

    if (id === "") {
      alert("아이디를 입력해주세요");
      idRef.current.focus();
      return;
    } else {
      if (pw === "") {
        alert("패스워드를 입력해주세요");
        pwRef.current.focus();
        return;
      } else {
        getLogin();
      }
    }
  };

  return (
    <>
      <div className="LoginWrap">
        <div className="LoginBox">
          <h1>로그인</h1>
          <form>
            <div className="formBox">
              <label htmlFor="loginId">ID</label>
              <input
                type="text"
                name="loginId"
                id="loginId"
                placeholder="ID를 입력해주세요"
                ref={idRef}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onKeyPress={onEnter}
                autoFocus
              />
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">PASSWORD</label>
              <input
                type="password"
                name="loginPw"
                id="loginPw"
                placeholder="Password를 입력해주세요"
                ref={pwRef}
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                onKeyPress={onEnter}
              />
            </div>
            <button type="button" className="button" onClick={onClickLogin}>
              로그인하기
            </button>
          </form>
          <button onClick={() => navigate("/Register")}>
            회원가입하러가기
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
