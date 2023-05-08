import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/store.scss";

const Store = () => {
  return (
    <div className="Store">
      <div className="sidebar">
        <div className="sidebarbox">간식</div>
        <div className="sidebarbox">목줄</div>
        <div className="sidebarbox">영양제</div>
        <div className="sidebarbox">아몰랑</div>
      </div>
      <div className="storebox"></div>
    </div>
  );
};
export default Store;
