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
          Map
        </Link>
        <Link to="/mydog" className="nav-link">
          강아지추천
        </Link>
        <Link to="/quizhome" className="nav-link">
          Quiz
        </Link>
        <Link to="/#" className="nav-link">
          store
        </Link>
        <Link to="/board/page/1" className="nav-link">
          board
        </Link>
        <Link to="/Login" className="nav-link">
          login
        </Link>
        <Link to="/Register" className="nav-link">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Header;
