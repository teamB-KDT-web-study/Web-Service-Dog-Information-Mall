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
        <Link to="/#" className="menu-item">
          store
        </Link>
        <Link to="/board" className="menu-item">
          board
        </Link>
        <Link to="/Login" className="menu-item">
          login
        </Link>
        <Link to="/Register" className="menu-item">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Header;
