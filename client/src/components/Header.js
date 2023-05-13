import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({ userId, destroySession }) => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">로고</Navbar.Brand>
        {userId.isLogin === false ? (
          <div></div>
        ) : (
          <Nav.Link href='/MyPage' className="profileBox">
              <div className="imgBox">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/profile_img/${userId.profile_img}`
                  }
                  alt="profile image"
                />
              </div>
              <div className="msgBox">
                <div className="welcomeMsg">
                  {userId.nickname}님 환영합니다!
                </div>
              </div>
          </Nav.Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Map/동물병원">우리동네 동물병원</Nav.Link>
            <Nav.Link href="/mydog">강아지추천</Nav.Link>
            <Nav.Link href="/quizhome">Quiz</Nav.Link>
            <Nav.Link href="/store">애견샵</Nav.Link>
            <Nav.Link href="/board/page/1">커뮤니티</Nav.Link>
            {userId.isLogin === false ? (
              <Nav.Link href="/Login" className="nav-link">
                로그인
              </Nav.Link>
            ) : (
              <Nav.Link onClick={destroySession}>로그아웃</Nav.Link>
            )}
            <Nav.Link href="/Register">회원가입</Nav.Link>
            <Nav.Link href="/MyPage">MyPage</Nav.Link>
            <Nav.Link href="/store/cart">임시쇼핑카트</Nav.Link> 

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
