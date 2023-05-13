import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/storedetail.scss";
import axios from "axios";

const Storedetail = () => {
  const gradeInfo = {
    남남: 0,
    "서먹한 친구": 3,
    친구: 5,
    "친한 친구": 7,
    "베스트 프렌드": 10,
  };
  const [userId, setuserId] = useState("");

  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const { storeId } = useParams();
  //select에서 option값을 클릭시 표시 되는 코드
  const [selectedOption, setSelectedOption] = useState("");
  const [onePrice, setOnePrice] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getItem = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_DB_HOST}/store/getItem?product_id=${storeId}`
      );
      const user = await axios.get(process.env.REACT_APP_DB_HOST + "/member/checkLogin");
      setItem(res.data);
      setuserId(user.data);
    };
    getItem();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  //수량 plus
  const plus = () => {
    setNumber(number + 1);
    countPrice();
  };
  //수량 minus
  const miner = () => {
    if (number === 0) {
      return;
    }
    setNumber(number - 1);
    countPrice();
  };

  useEffect(() => {
    console.log(number);
    countPrice();
  }, [number]);

  const countPrice = () => {
    if (!userId.isLogin || userId.grade === "남남") {
      if (number === 0) {
        setOnePrice(0);
      } else {
        setOnePrice(item.price * number);
      }
    } else {
      if (number === 0) {
        setOnePrice(0);
      } else {
        const p = (item.price * (100 - gradeInfo[userId.grade])) / 100;
        setOnePrice(p * number);
      }
    }
  };
  //해당 상품 title값으로 주소 보내는 코드
  // const [item] = items.filter((p) => p.title === storeId);
  // 저장된 상품값이 없을 때 표시 되는 메세지 굳이 필요 없을 수도??...
  if (!item) {
    return <main className="Storedetail">존재하지 않는 상품입니다</main>;
  }
  const choice = JSON.parse(item.choice);

  const addCart = async () => {
    const session = await axios.get(process.env.REACT_APP_DB_HOST + "/member/checkLogin");

    if (session.data.isLogin && selectedOption !== "" && number !== 0) {
      await axios.post(process.env.REACT_APP_DB_HOST + "/store/addCart", {
        user_id: session.data.id,
        product_id: storeId,
        choice: selectedOption,
        amount: number,
      });
      alert("장바구니에 상품이 저장되었습니다!");
      navigate("/store/cart");
    } else {
      if (!session.data.isLogin) {
        alert("로그인이 필요합니다.");
      } else {
        alert("수량, 옵션이 선택되었는지 확인해주세요.");
      }
    }
  };

  return (
    <div className="Storedetail">
      {/* 상품이미지부분 */}
      <div>
        <img src={item.image} className="detailimg" />
      </div>
      <div className="detailbox">
        {/* 상품정보 및 수량 선택부분 */}
        <div
          className="detailtext"
          style={{ color: "purple", fontSize: "bold" }}
        >
          {/* 해당 상품 정보 부분 */} #{item.category}
        </div>
        <div className="detailtext"> {item.title}</div>
        {!userId.isLogin || userId.grade === "남남" ? (
          <div className="detailtext"> {item.price}원</div>
        ) : (
          <div className="price">
            <div className="detailtext fake"> {item.price}원</div>
            <div className="detailtext real">
              {" "}
              {(item.price * (100 - gradeInfo[userId.grade])) / 100}원
            </div>
            <div className="detailtext itemOff">
              {" "}
              {gradeInfo[userId.grade]}% off!
            </div>
          </div>
        )}

        <hr></hr>
        {/* 배송관련정보부분 */}
        {/* <h5 className="detailh5">구매혜택 2,000 포인트 적립예정 적립예정</h5> */}
        <h5 className="detailh5">배송 방법 택배</h5>
        <h5 className="detailh5">배송비 무료 (10,000원 이상 무료배송)</h5>
        {/* 옵션부분 */}
        <div className="detailchoice">
          옵션선택
          <select className="choice" onChange={handleOptionChange}>
            <option disabled selected>
              {Object.keys(choice)[0]}
            </option>
            {choice[Object.keys(choice)[0]].map((option, key) => {
              if (key !== 0) {
                return (
                  <option value={option} disabled>
                    {option}
                  </option>
                );
              } else {
                return <option value={option}>{option}</option>;
              }
            })}
          </select>
        </div>
        {/* 수량 선택 부분 */}
        <div className="choiceoption">
          <span className="cho">수량</span>
          <hr />
          <p>
            <div className="choicenum">
              <button onClick={miner} className="choicenumbtn">
                -
              </button>
              <h1 className="choicenumh1">{number}</h1>
              <button onClick={plus} className="choicenumbtn">
                +
              </button>
              <span className="selectprice">{onePrice} 윈</span>
            </div>
          </p>
        </div>
        <span className="totalprice">총상품구매({number})개</span>
        <span className="totalprice2"> {onePrice}원</span>

        {/* 구매 장바구니 찜 버튼 부분 */}
        <div>
          <button className="pay" onClick={addCart}>
            장바구니
          </button>
          <button className="pay">결제</button>
          <button className="pay">♡</button>
        </div>
      </div>

      <div className="otherchoiceoption">
        <span className="othercho">수량</span>
        <hr />
        <div className="otherdetailtext"> {item.title}</div>
        <p>
          <div className="choicenum">
            <button onClick={miner} className="otherchoicenumbtn">
              -
            </button>
            <h1 className="otherchoicenumh1">{number}</h1>
            <button onClick={plus} className="otherchoicenumbtn">
              +
            </button>
            <span className="otherselectprice">{onePrice} 윈</span>
          </div>
        </p>
        <div>
          <span className="othertotalprice">총상품구매({number})개</span>
          <span className="othertotalprice2"> {onePrice}원</span>
        </div>
        <div className="otherchoiceoptionbtn">
          <button className="otherpay" onClick={() => navigate('/store/cart')}>
            장바구니
          </button>
          <button className="otherpay">결제</button>
          <button className="otherpay">♡</button>
        </div>
      </div>
    </div>
  );
};

export default Storedetail;
