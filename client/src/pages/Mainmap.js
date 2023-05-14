import "../styles/mainmap.scss";
import { useNavigate } from "react-router-dom";

const Mainmap = () => {
  const navigate = useNavigate();
  return (
    <div className="Mainmap">
      <div className="Mainmapheader" style={{ color: "#987654" }}>
        동물 병원
      </div>
      <div className="Mainmapheader2">#내 주변의 동물병원 위치를 알려줘요!</div>
      <div className="mainmapbox">
        <div className="mainmapimgbox">
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mainmap.jpg`}
            className="mainmapimg"
          />
        </div>
        <div className="mainmapinfo">
          <div className="mainmapinfotext1">
            {"어디에 있던 주변의 병원을 보여드려요! "}
          </div>
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mainmap4.png`}
            className="mainmapimg2"
          />
          <button
            className="mainmapinfobtn"
            onClick={() => navigate("/Map/동물병원")}
          >
            찾아보기!
          </button>
        </div>
      </div>

      <div className="othermainmapbox">
        <div className="othermainmapimgbox">
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mainmap.jpg`}
            className="othermainmapimg"
          />
        </div>
        <div className="othermainmapinfo">
          <div className="othermainmapinfotext1">
            {"어디에 있던 주변의 병원을 보여드려요! "}
          </div>
          <img
            src={process.env.PUBLIC_URL + `/SlickImages/mainmap4.png`}
            className="othermainmapimg2"
          />
          <button
            className="othermainmapinfobtn"
            onClick={() => navigate("/Map/동물병원")}
          >
            찾아보기!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mainmap;
