import { useNavigate } from "react-router-dom";

const Storeheader = (props) => {
  const { Stores } = props;
  const navigate = useNavigate();

  return (
    <div className="Storeheader">
      <div className="searchbar">
        <input className="searchbatinput" placeholder="🔍검색" />
      </div>
      <div className="sidebar">
        <button className="sidebarbtn" onClick={() => navigate("/store")}>
          #전체
        </button>
        <button className="sidebarbtn" onClick={() => navigate("/store/food")}>
          #강아지 사료
        </button>
        <button className="sidebarbtn" onClick={() => navigate("/store/snack")}>
          #강아지 간식
        </button>
        <button className="sidebarbtn" onClick={() => navigate("/store/t")}>
          #강아지 옷
        </button>
        <button
          className="sidebarbtn"
          onClick={() => navigate("/store/cushion")}
        >
          #강아지 쿠션
        </button>
        <button className="sidebarbtn" onClick={() => navigate("/store/lead")}>
          #강아지 목줄
        </button>
      </div>
    </div>
  );
};

export default Storeheader;
