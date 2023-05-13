import "../styles/mainmydog.scss";
import { useNavigate } from "react-router-dom";

const Mainmydog = () => {
  const navigate = useNavigate();
  return (
    <div className="Mainmydog">
      <div className="Trainingheader" style={{ color: "#987654" }}>
        강아지 추천
      </div>
      <div className="Trainingheader2">#나와 맞는 강아지를 알수 있어요!</div>
      <div className="mainmydogbox">
        <div className="mainmydogimgbox">
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mainmydog.jpg`}
            className="mainmydogimg"
          />
        </div>
        <div className="mainmydoginfo">
          <div className="mainmydoginfotext1"> 세상에 수많은 강아지들...</div>
          <br />
          <div className="mainmydoginfotext2">
            어떤 강아지가 나와 맞을지 궁금하신가요?
          </div>
          <br />
          <div className="mainmydoginfotext3"> 저희가 찾아드릴게요!</div>
          <br />
          <br />
          <br />
          <button
            className="mainmydoginfobtn"
            onClick={() => navigate("/mydog")}
          >
            찾으러 가기!
          </button>
        </div>
      </div>
      <div className="othermainmydogbox">
        <div className="othermainmydogimgbox">
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mainmydog.jpg`}
            className="othermainmydogimg"
          />
        </div>
        <div className="othermainmydoginfo">
          <div className="othermainmydoginfotext1">
            {" "}
            세상에 수많은 강아지들...
          </div>
          <br />
          <div className="othermainmydoginfotext2">
            어떤 강아지가 나와 맞을지 궁금하신가요?
          </div>
          <br />
          <div className="othermainmydoginfotext3"> 저희가 찾아드릴게요!</div>
          <br />
          <br />
          <br />
          <button
            className="othermainmydoginfobtn"
            onClick={() => navigate("/mydog")}
          >
            찾으러 가기!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainmydog;
