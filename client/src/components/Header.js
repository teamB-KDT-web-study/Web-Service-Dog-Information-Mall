import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.scss";
import { Link } from "react-router-dom";

const Header = ({ userId, destroySession }) => {
  return (
    <div className="Header">
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="/">
          로고
        </a>
        <Link to="/Map" className="nav-link">
          우리동네 동물병원
        </Link>
        <Link to="/mydog" className="nav-link">
          강아지추천
        </Link>
        <Link to="/quizhome" className="nav-link">
          Quiz
        </Link>
        <Link to="/store" className="nav-link">
          애견샵
        </Link>
        <Link to="/board/page/1" className="nav-link">
          커뮤니티
        </Link>
        {userId.isLogin === false ? (
          <Link to="/Login" className="nav-link">
            로그인
          </Link>
        ) : (
          <Link onClick={destroySession} className="nav-link">
            로그아웃
          </Link>
        )}
        <Link to="/Register" className="nav-link">
          회원가입
        </Link>
        <Link to="/MyPage" className="nav-link">
          MyPage
        </Link>
        {userId.isLogin === false ? (
          <div></div>
        ) : (
          <Link to="/MyPage" className="nav-link profileBox">
            <div className="imgBox">
              <img
                src={
                  process.env.PUBLIC_URL + `/profile_img/${userId.profile_img}`
                }
                alt="profile image"
              />
            </div>
            <div className="msgBox">
              <div className="welcomeMsg">{userId.nickname}님 환영합니다!</div>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
