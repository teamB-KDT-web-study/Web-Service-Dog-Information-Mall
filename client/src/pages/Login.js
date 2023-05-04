import "../styles/Login.scss";

const Login = () => {
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
              />
            </div>
            <div className="formBox">
              <label htmlFor="loginPw">PASSWORD</label>
              <input
                type="password"
                name="loginPw"
                id="loginPw"
                placeholder="Password를 입력해주세요"
              />
            </div>
            <button type="button">Login</button>
          </form>
          <button type="button" className="link">
            Resister
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
