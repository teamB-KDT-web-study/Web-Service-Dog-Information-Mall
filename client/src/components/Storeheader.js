import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import shopDataNew from '../json/shopDataNew.json';
import Storeitem from "../components/Storeitem";

const Storeheader = () => {
  const [searchTerm, setSearchTerm] = useState(""); //검색
  const [searchResults, setSearchResults] = useState([]); //결과창
  const [showResults, setShowResults] = useState(false); //결과창 on off
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    const res = await axios.get(
      process.env.REACT_APP_DB_HOST + "/member/checkLogin"
    );
    setUserInfo(res.data);
  };
  //검색하기
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const viewAll = () => {
    window.location.replace("/store");
  };

  const viewSpecific = (item) => {
    const searchItem = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_DB_HOST}/store/searchProduct?keyword=${item}`
      );
      setSearchResults(res.data.data);
    };
    searchItem();
    setShowResults(true);
    setSearchTerm("");
    getUserInfo();
  };
  //검색하기 버튼 일단은 버튼 지움
  const handleSearchButton = () => {
    if (searchTerm !== "") {
      const searchItem = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_DB_HOST}/store/searchProduct?keyword=${searchTerm}`
        );
        setSearchResults(res.data.data);
      };
      searchItem();
      setShowResults(true);
      setSearchTerm("");
      getUserInfo();
    } else {
      alert("검색어를 입력해주세요.");
    }
    // const filteredStores = shopDataNew.filter((store) =>
    //   store.title.includes(searchTerm)
    // );
    // setSearchResults(filteredStores);
    // setShowResults(true);
  };
  //엔터키로 검색하기
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchButton();
    }
  };
  //결과창 닫는 버튼
  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <div className="Storeheader">
      {/* 검색부분 */}
      <div className="searchbar">
        <div className="searchBox">
          <input
            className="searchbatinput"
            placeholder="상품명을 검색하세요"
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
          <div className="searchBtn" onClick={handleSearchButton}>
            🔍{" "}
          </div>
        </div>
      </div>

      <div className="sidebar">
        {/* 카테고리 부분 */}
        <button className="sidebarbtn" onClick={viewAll}>
          #전체
        </button>
        <button className="sidebarbtn" onClick={() => viewSpecific("사료")}>
          #강아지 사료
        </button>
        <button className="sidebarbtn" onClick={() => viewSpecific("간식")}>
          #강아지 간식
        </button>
        <button className="sidebarbtn" onClick={() => viewSpecific("옷")}>
          #강아지 옷
        </button>
        <button className="sidebarbtn" onClick={() => viewSpecific("쿠션")}>
          #강아지 쿠션
        </button>
        <button className="sidebarbtn" onClick={() => viewSpecific("목줄")}>
          #강아지 목줄
        </button>
      </div>
      {/* 결과창 부분 */}
      {showResults && (
        <div className="Search">
          <div className="closebtn">
            <button className="CloseButton" onClick={handleCloseResults}>
              X
            </button>
          </div>
          <div className="Searchbox">
            {searchResults.length === 0 ? (
              <div className="NoResults">검색하신 상품이 없습니다.</div>
            ) : (
              searchResults.map((store) => {
                return <Storeitem key={store.id} store={store} userInfo={userInfo} />;
                // <div key={store.id}>
                //   <div className="Searchitem">
                //     <Link to={"/store/" + store.title}>
                //       <div>
                //         <img
                //           src={store.image}
                //           className="Searchitemimg"
                //           alt={store.title}
                //         />
                //       </div>
                //     </Link>
                //     <div className="Searchitemh1"> {store.title}</div>
                //     <div className="Searchitemh1"> {store.price}원</div>
                //   </div>
                // </div>
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Storeheader;
