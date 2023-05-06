import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/training.scss";
const Training = () => {
  const navigate = useNavigate();
  return (
    <div className="Training">
      <div className="cards">
        <article className="information [ card ]">
          <span className="tag">강아지 훈련 기초편</span>
          <h2 className="title">
            강아지가 반려인 또는 다른 반려동물과 함께 생활하기 위해 꼭 필요한
            교육입니다.
          </h2>
          <p className="info">
            기초 훈련으로는 앉아, 엎드려, 기다려, 이리와, 안 돼 훈련이 있으며,
            위험한 상황이나 돌발 상황에서 강아지의 안전을 위해 유용하게 쓰일 수
            있습니다.
          </p>
          <button
            className="button"
            onClick={() => navigate("training/traininginfo")}
          >
            <span>기초편 배우러 가기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="none"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                fill="currentColor"
              />
            </svg>
          </button>
        </article>
      </div>
      <div className="cards">
        <article className="information [ card ]">
          <span className="tag">강아지 훈련 중급편</span>
          <h2 className="title">
            강아지에 올바른 배변활동을 위해 필요한 울타리 배변 훈련 교육입니다.
          </h2>
          <p className="info">
            배변훈련방법이란, 울타리를 강아지 집과 밥그릇 그리고 배변판에 딱
            맞춰서 울타리를 두르고 그 안에서만 활동하게 하는 방법 입니다.
          </p>
          <button className="button">
            <span>중급편 배우러 가기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="none"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                fill="currentColor"
              />
            </svg>
          </button>
        </article>
      </div>
      <div className="cards">
        <article className="information [ card ]">
          <span className="tag">강아지 훈련 고급편</span>
          <h2 className="title">
            강아지 훈련 종류 중 고급 훈련에 속하는 개인기 훈련을 위해 필요한
            교육입니다.
          </h2>
          <p className="info">
            간단한 개인기로는 ‘손’, ‘하이파이브’, ‘빵야’ 등의 훈련이 있습니다.
            난이도가 높은 개인기로는 장애물 넘기 훈련이 대표적 입니다.
          </p>
          <button className="button">
            <span>고급편 배우러 가기</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="none"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                fill="currentColor"
              />
            </svg>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Training;
