import "../styles/Login.scss";
const Register = () => {
  return (
    <>
      <div className="LoginWrap">
        <div className="LoginBox">
          <h1>회원가입</h1>
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
            <div className="formBox">
              <label htmlFor="loginPw">NiCKNAME</label>
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder="nickname을 입력해주세요"
              />
            </div>
            <h2>강아지 정보</h2>
            <div className="formBox">
              <input type="radio" name="pet" id="pet1" />
              <label htmlFor="pet1">있음</label>
              <input type="radio" name="pet" id="pet2" />
              <label htmlFor="pet2">없음</label>
            </div>
            <button type="button">회원가입</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
