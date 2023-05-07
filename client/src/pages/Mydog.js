import "../styles/mydog.scss";
import { useNavigate } from "react-router-dom";

const Mydog = () => {
  const navigate = useNavigate();
  return (
    <div className="Mydog">
      <div className="dogbox">
        <h1>나에게 맞는 강아지</h1>
        <div className="dogprofile"></div>
        <button className="dogbtn" onClick={() => navigate("/mydog/mydoginfo")}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Mydog;
