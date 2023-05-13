import { API_BASE_URL } from "../containers/app-config";
import axios from "axios";
import "../styles/testLogin.scss";

function TestLogin() {
  const testLoginBtn = async () => {
    const res = await axios.post(API_BASE_URL + "/member/login", {
      id: "apple",
      pw: "1234",
    });
    alert("테스트용 아이디 입니다.");
    window.location.replace("/")
  };

  return (
    <div className="TestLogin">
      <div onClick={testLoginBtn} className="testLoginBtn">
        테스트 로그인
      </div>
    </div>
  );
}

export default TestLogin;
