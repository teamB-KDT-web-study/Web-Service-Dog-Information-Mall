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
        <table border="1" className="itemContainer">
          <tr className="tableHead">
            <td>전체</td>
            <td>이미지</td>
            <td>상품</td>
            <td>수량</td>
            <td>가격</td>
            <td>할인</td>
            <td>주문</td>
            <td>삭제</td>
          </tr>
          {cartInfo.length >= 1 ? (
            cartInfo.map((el, id) => {
              return (
                <tr>
                  <td className="firstTd">{id + 1}</td>
                  <td
                    className="secondTd"
                    onClick={() => navigate("/store/item/" + el.product_id)}
                  >
                    <img src={el.product.image} alt={id + 1} />
                  </td>
                  <td
                    onClick={() => navigate("/store/item/" + el.product_id)}
                    className="thirdTd"
                  >
                    <div>{el.product.title}</div>
                    <div className="cartChoice">{el.choice}</div>
                  </td>
                  <td>{el.amount}</td>
                  {grade !== "남남" ? (
                    <td className="price">
                      <div className="fake">{el.product.price}</div>
                      <div className="real">
                        {(el.product.price * (100 - gradeInfo[grade])) / 100}
                      </div>
                    </td>
                  ) : (
                    <td>
                      <div className="fake">{el.product.price}</div>
                    </td>
                  )}
                  {grade !== '남남'? <td>{gradeInfo[grade]}% off</td>: <td>.</td>}
                  
                  <td>
                    <div className="orderBtn" onClick={orderItem}>
                      주문
                    </div>
                  </td>
                  <td>
                    <div
                      className="deleteBtn"
                      onClick={() => deleteItem(el.product_id, el.choice)}
                    >
                      삭제
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="notFoundMsg">
              장바구니에 상품이 존재하지 않습니다.
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default StoreCart;
