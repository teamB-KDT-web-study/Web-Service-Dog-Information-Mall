import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/storeCart.scss";

const StoreCart = () => {
  const gradeInfo = {
    남남: 0,
    "서먹한 친구": 3,
    친구: 5,
    "친한 친구": 7,
    "베스트 프렌드": 10,
  };
  const [userId, setuserId] = useState("");
  const [grade, setGrade] = useState("");
  const [cartInfo, setCartInfo] = useState([]);
  const navigate = useNavigate();
  const getCartItems = async () => {
    const userId = await axios.get(process.env.REACT_APP_DB_HOST + "/member/checkLogin");
    if (!userId.data.isLogin) {
      return;
    }
    const res = await axios.post(process.env.REACT_APP_DB_HOST + "/store/showCart", {
      user_id: userId.data.id,
    });
    setCartInfo(res.data);
    setGrade(userId.data.grade);
    setuserId(userId.data.id);
  };
  useEffect(() => {
    getCartItems();
  }, []);

  const deleteItem = async (productId, choice) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const res = await axios.delete(process.env.REACT_APP_DB_HOST + "/store/deleteCart", {
        data: {
          user_id: userId,
          product_id: productId,
          choice: choice,
        },
      });
      getCartItems();
    } else {
      return;
    }
  };
  const orderItem = () => {
    alert("주문 기능은 아직 없습니다...^^");
  };
  return (
    <div className="StoreCart">
      <div className="cartContainer">
        <div className="header">장바구니</div>
        <div className="itemContainer">
          {cartInfo.length >= 1 ? (
            cartInfo.map((el, id) => {
              return (
                <div className="itemRow" key={id}>
                  <div className="itemColumn firstColumn">{id + 1}</div>
                  <div
                    className="itemColumn secondColumn"
                    onClick={() => navigate("/store/item/" + el.product_id)}
                  >
                    <img src={el.product.image} alt={id + 1} />
                  </div>
                  <div
                    onClick={() => navigate("/store/item/" + el.product_id)}
                    className="itemColumn thirdColumn"
                  >
                    <div>{el.product.title}</div>
                    <div className="cartChoice">{el.choice}</div>
                  </div>
                  <div className="itemColumn">수량:{el.amount}</div>
                  {grade !== "남남" ? (
                    <div className="itemColumn price">
                      <div className="fake">가격:{el.product.price}</div>
                      <div className="real">
                        {(el.product.price * (100 - gradeInfo[grade])) / 100}원
                      </div>
                    </div>
                  ) : (
                    <div className="itemColumn">
                      <div className="real">{el.product.price}원</div>
                    </div>
                  )}
                  {grade !== "남남" ? (
                    <div className="itemColumn">{gradeInfo[grade]}% off</div>
                  ) : (
                    <div className="itemColumn">.</div>
                  )}
                  <div className="itemColumn">
                    <div className="orderBtn" onClick={orderItem}>
                      주문
                    </div>
                  </div>
                  <div className="itemColumn">
                    <div
                      className="deleteBtn"
                      onClick={() => deleteItem(el.product_id, el.choice)}
                    >
                      삭제
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="notFoundMsg">
              장바구니에 상품이 존재하지 않습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreCart;
