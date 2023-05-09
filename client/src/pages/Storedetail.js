import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "../styles/storedetail.scss";

const Storedetail = (props) => {
  const { Stores } = props;
  const { storeId } = useParams();
  //select에서 option값을 클릭시 표시 되는 코드
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [number, setNumber] = useState(1);
  const plus = () => {
    setNumber(number + 1);
    setSelectedOption(targetStore.price + targetStore.price * number);
  };
  const miner = () => {
    setNumber(number - 1);
    setSelectedOption(targetStore.price * number - targetStore.price);
  };

  const [targetStore] = Stores.filter((p) => p.id === Number(storeId));
  //저장된 상품값이 없을 때 표시 되는 메세지 굳이 필요 없을 수도??...
  if (!targetStore) {
    return <main className="Storedetail">존재하지 않는 상품입니다</main>;
  }

  return (
    <div className="Storedetail">
      <div>
        <img src={targetStore.image} className="detailimg" />
      </div>
      <div className="detailbox">
        <div
          className="detailtext"
          style={{ color: "purple", fontSize: "bold" }}
        >
          {" "}
          #{targetStore.category}
        </div>
        <div className="detailtext"> {targetStore.title}</div>
        <div className="detailtext"> {targetStore.price}원</div>
        <hr></hr>
        <h5 className="detailh5">구매혜택 2,000 포인트 적립예정 적립예정</h5>
        <h5 className="detailh5">배송 방법 택배</h5>
        <h5 className="detailh5">배송비 무료 (10,000원 이상 무료배송)</h5>

        <div className="detailchoice">
          옵션선택
          <select className="choice" onChange={handleOptionChange}>
            <option>필수옵션</option>
            <option>1Kg={targetStore.price}원</option>
          </select>
        </div>
        <br></br>
        <div className="choiceoption">
          {selectedOption && (
            <p>
              {selectedOption}
              <div className="choicenum">
                <button onClick={miner}>-</button>
                <h1>{number}</h1>
                <button onClick={plus}>+</button>
              </div>
            </p>
          )}
        </div>
        <br></br>
        <div>
          <button className="pay">장바구니</button>
          <button className="pay">결제</button>
          <button className="pay">♡</button>
        </div>
      </div>
    </div>
  );
};

export default Storedetail;