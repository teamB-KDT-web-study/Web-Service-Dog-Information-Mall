import "../styles/Login.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../containers/app-config";

const Login = () => {
  const navigate = useNavigate();
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [button, setButton] = useState(true);
  const realId = "han";
  const realPw = "1234";

  function changeButton() {
    // id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  }

  const goToMain = () => {
    navigate("/");
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
    const getLogin = async () => {
      const res = await axios.post(API_BASE_URL + "/member/login", {
        id,
        password,
      });
      console.log(res.data);
    };
    getLogin();
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  // useEffect(
  //   () => {
  //     axios
  //       .get("/Login")
  //       .then((res) => console.log(res))
  //       .catch();
  //   },
  //   // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
  //   []
  // );

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
                placeholder="ID를 입력해주세요"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onKeyUp={changeButton}
              />
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">PASSWORD</label>
              <input
                type="password"
                name="loginPw"
                id="loginPw"
                placeholder="Password를 입력해주세요"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                onKeyUp={changeButton}
              />
            </div>
            <button type="button" className="button" onClick={onClickLogin}>
              {/* (e) => {
                if (realId == id) {
                  if (realPw == pw) {
                    e.stopPropagation();
                    goToMain();
                  }
                } else {
                  Swal.fire("정보가 일치하지 않습니다");
                }
              } */}
              Login
            </button>
          </form>
          <button>Resister</button>
        </div>
      </div>
    </>
  );
};

export default Login;
