import "../styles/mydog.scss";
import { useNavigate } from "react-router-dom";

const Mydog = () => {
  const navigate = useNavigate();
  return (
    <div className="Mydog">
      <div className="dogbox">
        <h1>나에게 맞는 강아지는 무엇일까?</h1>
        <div className="dogprofile">
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mydog.jpeg`}
            className="mydogimg"
          />
        </div>
        <button className="dogbtn" onClick={() => navigate("/mydog/mydoginfo")}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Mydog;
