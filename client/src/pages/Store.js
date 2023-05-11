import { useEffect, useState } from 'react';
import Storeheader from '../components/Storeheader';
import '../styles/store.scss';
import Storeitem from '../components/Storeitem';
import axios from 'axios';
import { API_BASE_URL } from '../containers/app-config.js';

const Store = () => {
  const [lastNum, setLastNum] = useState(0);
  const [category, setCategory] = useState('전체');
  const [items, setItems] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      console.log('useEffect');
      const res = await axios.get(`${API_BASE_URL}/store/`);
      setItems(res.data);

      setLastNum(items[items.length - 1].id);
    };

    getData();
  }, []);

  const moreItems = async (lastNum, category) => {
    console.log('moreItems');
    console.log('last Num >>> ', lastNum);
    const res = await axios.get(
      `${API_BASE_URL}/store/moreItems?startNum=${lastNum}&category=전체`
    );
    console.log('res.data >> ', res.data);
    const newItems = [...items, ...res.data];
    console.log('newItems >>> ', newItems);

    setItems(newItems);
    setLastNum(items[items.length - 1].id);

    console.log('update items >>> ', items);
  };

  console.log('state >>>', items);
  // const items = res.data;
  // console.log(items);
  // const [visibleItems, setVisibleItems] = useState(10); // 초기에 보여지는 아이템 개수

  // const handleLoadMore = () => {
  //   setVisibleItems((prevCount) => prevCount + 15); // 15개씩 추가로 보여줌
  // };
  console.log(lastNum);
  return (
    <div className="Store">
      <Storeheader />
      <div className="storeitem">
        {items.map((item) => {
          // 현재까지 visibleItems 개수만큼의 아이템만 렌더링
          return <Storeitem key={item.id} store={item} />;
        })}
      </div>
      <div className="more">
        <button
          onClick={() => {
            moreItems(lastNum, category);
          }}
          className="morebtn"
        >
          더 보기
        </button>
      </div>
    </div>
  );
};

export default Store;
