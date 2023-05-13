import { Link } from "react-router-dom";
import "../styles/storeitem.scss";
const Storeitem = (props) => {
  const { store, userInfo } = props;
  const gradeInfo = {
    남남: 0,
    "서먹한 친구": 3,
    친구: 5,
    "친한 친구": 7,
    "베스트 프렌드": 10,
  };
  return (
    <div className="Storeitem">
      <Link to={"/store/item/" + store.id}>
        <img src={store.image} className="Storeitemimg" />
      </Link>
      <div className="storeInfo">
        <div className="Storeitemh1"> {store.title}</div>
        {userInfo.isLogin ? (
          <div className="price">
            <div className="Storeitemh1 fake">{store.price}원</div>
            <div className="Storeitemh1 real">
              {(store.price * (100 - gradeInfo[userInfo.grade])) / 100}원 (
              {gradeInfo[userInfo.grade]}%off)
            </div>
          </div>
        ) : (
          <div className="Storeitemh1">{store.price}원</div>
        )}
      </div>
    </div>
  );
};
export default Storeitem;
