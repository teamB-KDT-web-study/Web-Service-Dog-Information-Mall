import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.scss";
import { Link, useSearchParams } from "react-router-dom";

const Header = () => {
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
        <Link to="/Login" className="nav-link">
          로그인
        </Link>
        <Link to="/Register" className="nav-link">
          회원가입
        </Link>
        <Link to="/MyPage" className="nav-link">
          MyPage
        </Link>
      </nav>
    </div>
  );
};

export default Header;
