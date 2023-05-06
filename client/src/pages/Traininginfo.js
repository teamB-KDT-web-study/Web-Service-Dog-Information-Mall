import "../styles/traininginfo.scss";

const Traininginfo = () => {
  return (
    <div className="Traininginfo">
      <div className="box1">
        <h1>강아지 훈련 기초편</h1>
      </div>
      <div className="box2">
        <h1>무엇을 배우나요?</h1>
        <div className="box2 box">
          <h3>=강아지의 기본 훈련을 학습합니다.=</h3>
          <h3>"앉아, 엎드려, 기다려, 이리와, 안 돼"</h3>
          <h3>강아지의 안전과 보호자의 안전을 위한 훈련입니다.</h3>
        </div>
      </div>
      <div className="box3">
        <div className="box3 header"></div>
        <div className="box3 body"></div>
        <div className="box3 button">
          <button>이전</button>
          <button>다음</button>
        </div>
      </div>
    </div>
  );
};

export default Traininginfo;
