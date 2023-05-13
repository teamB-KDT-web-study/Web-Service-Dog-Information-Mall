import "../styles/mainmap.scss";

const Mainmap = () => {
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
      </div>
    </div>
  );
};

export default Mainmap;
