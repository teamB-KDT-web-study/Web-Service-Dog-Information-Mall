import { Link, useSearchParams } from "react-router-dom";

const Storeheader = () => {
  return (
    <div className="Storeheader">
      <div className="searchbar">
        <input className="searchbatinput" placeholder="🔍검색" />
      </div>
      <div className="sidebar">
        <button className="sidebarbtn">#간식</button>
        <button className="sidebarbtn">#목줄</button>
        <button className="sidebarbtn">#영양제</button>
        <button className="sidebarbtn">#아몰랑</button>
      </div>
    </div>
  );
};

export default Storeheader;
