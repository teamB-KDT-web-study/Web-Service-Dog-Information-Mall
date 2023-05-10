import { useState } from "react";
import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";

const Store = (props) => {
  const { Stores } = props;
  const [visibleItems, setVisibleItems] = useState(10); // 초기에 보여지는 아이템 개수

  const handleLoadMore = () => {
    setVisibleItems((prevCount) => prevCount + 15); // 15개씩 추가로 보여줌
  };

  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {Stores.slice(0, visibleItems).map((store) => {
          // 현재까지 visibleItems 개수만큼의 아이템만 렌더링
          return <Storeitem key={store.id} store={store} />;
        })}
      </div>
      {visibleItems < Stores.length && (
        <div className="more">
          <button onClick={handleLoadMore} className="morebtn">
            더 보기
          </button>
        </div>
      )}
    </div>
  );
};

export default Store;
