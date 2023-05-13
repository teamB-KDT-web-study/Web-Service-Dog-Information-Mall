import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Storeheader from "../components/Storeheader";
import "../styles/store.scss";
import Storeitem from "../components/Storeitem";
import axios from "axios";
import { API_BASE_URL } from "../containers/app-config.js";

const Store = () => {
  const [lastNum, setLastNum] = useState(0);
  const [items, setItems] = useState([{}]);
  const [categoryLastNum, setCategoryLastNum] = useState(0);
  const { category } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = async () => {
    const res = await axios.get(API_BASE_URL + "/member/checkLogin");
    setUserInfo(res.data);
  };
  getUserInfo();
  useEffect(() => {
    getUserInfo();
  }, [userInfo]);
  useEffect(() => {
    const getData = async () => {
      let router = `${API_BASE_URL}/store/`;
      if (category) {
        router += category;
      }
      const res = await axios.get(router);
      setItems(res.data.data);
      setCategoryLastNum(res.data.lastId);

      setLastNum(res.data.data[res.data.data.length - 1].id);
    };
    getData();
  }, [category]);

  // useEffect(() => {
  //   getData();
  //   console.log('lastNum >> ', items[items.length - 1]);

  //   // console.log('lastNum >> ', lastNum);
  // }, []);

  const moreItems = async (lastNum, category) => {
    console.log("moreItems");
    const res = await axios.get(
      `${API_BASE_URL}/store/moreItems?startNum=${lastNum}&category=${category}`
    );
    const newItems = [...items, ...res.data];

    setItems(newItems);
    setLastNum(newItems[newItems.length - 1].id);
  };

  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {items.map((item) => {
          // 현재까지 visibleItems 개수만큼의 아이템만 렌더링
          return <Storeitem key={item.id} store={item} userInfo={userInfo} />;
        })}
      </div>
      <div className="more">
        {lastNum === categoryLastNum || (
          <button
            onClick={() => {
              moreItems(lastNum, category);
            }}
            className="morebtn"
          >
            더 보기
          </button>
        )}
      </div>
    </div>
  );
};

export default Store;
