import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/storedetail.scss";
import axios from "axios";
import { API_BASE_URL } from "../containers/app-config.js";

const Storedetail = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const { storeId } = useParams();
  //select에서 option값을 클릭시 표시 되는 코드
  const [selectedOption, setSelectedOption] = useState("");
  console.log("storeId >> ", storeId);
  useEffect(() => {
    const getItem = async () => {
      console.log("detail useEffect 실행");
      const res = await axios.get(
        `${API_BASE_URL}/store/getItem?product_id=${storeId}`
      );

      setItem(res.data);
      console.log("res >>> ", res);
      console.log("item >> ", item);
    };
    getItem();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [number, setNumber] = useState(0);
  //수량 plus
  const plus = () => {
    setNumber(number + 1);
    setSelectedOption(item.price + item.price * number);
  };
  //수량 minus
  const miner = () => {
    setNumber(number - 1);
    setSelectedOption(item.price * number - item.price);
  };
  //해당 상품 title값으로 주소 보내는 코드
  // const [item] = items.filter((p) => p.title === storeId);
  // 저장된 상품값이 없을 때 표시 되는 메세지 굳이 필요 없을 수도??...
  if (!item) {
    return <main className="Storedetail">존재하지 않는 상품입니다</main>;
  }
  const choice = JSON.parse(item.choice);
  console.log(choice);

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
        <div className="detailtext"> {item.price}원</div>
        <hr></hr>
        {/* 배송관련정보부분 */}
        <h5 className="detailh5">구매혜택 2,000 포인트 적립예정 적립예정</h5>
        <h5 className="detailh5">배송 방법 택배</h5>
        <h5 className="detailh5">배송비 무료 (10,000원 이상 무료배송)</h5>
        {/* 옵션부분 */}
        {/* <div className="detailchoice">
          옵션선택
          <select className="choice" onChange={handleOptionChange}>
            <option disabled selected>
              {Object.keys(choice)[0]}
            </option>
            {choice[Object.keys(choice)[0]].map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </div> */}
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
              <span className="selectprice">{selectedOption} 윈</span>
            </div>
          </p>
        </div>
        <span className="totalprice">총상품구매({number})개</span>
        <span className="totalprice2"> {selectedOption}원</span>

        {/* 구매 장바구니 찜 버튼 부분 */}
        <div>
          <button className="pay" onClick={() => navigate("/store/cart")}>
            장바구니
          </button>
          <button className="pay">결제</button>
          <button className="pay">♡</button>
        </div>
      </div>

      <div className="otherchoiceoption">
        <span className="othercho">수량</span>
        <hr />
        <div className="otherdetailtext"> </div>
        <p>
          <div className="choicenum">
            <button onClick={miner} className="otherchoicenumbtn">
              -
            </button>
            <h1 className="otherchoicenumh1">{number}</h1>
            <button onClick={plus} className="otherchoicenumbtn">
              +
            </button>
            <span className="otherselectprice">{selectedOption} 윈</span>
          </div>
        </p>
        <div>
          <span className="othertotalprice">총상품구매({number})개</span>
          <span className="othertotalprice2"> {selectedOption}원</span>
        </div>
        <div className="otherchoiceoptionbtn">
          <button className="otherpay" onClick={() => navigate("/store/cart")}>
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
