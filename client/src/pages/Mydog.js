import "../styles/mydog.scss";
import { useNavigate } from "react-router-dom";

const Mydog = () => {
  const navigate = useNavigate();
  return (
    //강아지 추천 메인 화면
    <div className="Mydog">
      <div className="dogbox">
        <h2>나에게 맞는 강아지는 무엇일까?</h2>
        <div className="dogprofile">
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mydog.png`}
            className="mydogimg"
          />
        </div>
        {/* 강아지 추천 시작하는 버튼 */}
        <button className="dogbtn" onClick={() => navigate("/mydog/mydoginfo")}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Mydog;
