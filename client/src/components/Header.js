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

        <a className="nav-link" href="#">
          지도API
        </a>
        <a className="nav-link" href="#">
          스토어
        </a>
        <a className="nav-link disabled">Disabled</a>
        <Link to="/Map" className="menu-item">
          Map
        </Link>
        <Link to="/quizhome" className="menu-item">
          Quiz
        </Link>
        <Link to="/#" className="nav-link">
          store
        </Link>
        <Link to="/board" className="nav-link">
          board
        </Link>
        <Link to="/Login" className="nav-link">
          login
        </Link>
        <Link to="/Register" className="nav-link">
          Register
        </Link>
        <Link to="/MyPage" className="nav-link">
          MyPage
        </Link>
      </nav>
    </div>
  );
};

export default Header;
