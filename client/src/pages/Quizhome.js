import { useNavigate } from "react-router-dom";
import "../styles/quizhome.scss";

const Quizhome = () => {
  const navigate = useNavigate();

  return (
    <div className="Quizhome">
      <div className="cards">
        <article className="information [ card ]">
          <span className="tag">STEP.1</span>
          <h2 className="title">
            강아지가 반려인 또는 다른 반려동물과 함께 생활하기 위해 꼭 필요한
            교육입니다.
          </h2>

          <button className="button" onClick={() => navigate("/quiz")}>
            <span>Test1 </span>
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
          <span className="tag">STEP.2</span>
          <h2 className="title">
            강아지 훈련 종류 중 고급 훈련에 속하는 개인기 훈련을 위해 필요한
            교육입니다.
          </h2>

          <button className="button">
            <span>Test2</span>
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
          <span className="tag">STEP.3</span>
          <h2 className="title">
            강아지 훈련 종류 중 고급 훈련에 속하는 개인기 훈련을 위해 필요한
            교육입니다.
          </h2>

          <button className="button">
            <span>Test3</span>
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
          <span className="tag">STEP.4</span>
          <h2 className="title">
            강아지 훈련 종류 중 고급 훈련에 속하는 개인기 훈련을 위해 필요한
            교육입니다.
          </h2>

          <button className="button">
            <span>TEST4</span>
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

export default Quizhome;
