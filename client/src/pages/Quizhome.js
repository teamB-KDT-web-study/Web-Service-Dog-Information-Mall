import { useNavigate } from "react-router-dom";
import "../styles/quizhome.scss";

const Quizhome = () => {
  const navigate = useNavigate();

  return (
    //퀴즈 페이지로 넘어가기 위한 card?부분 step1,2,3,4
    <div className="Quizhome">
      <div className="cards">
        <article className="information [ card1 ]">
          <span className="tag">STEP.1</span>
          <h2 className="title1">
            강아지와 반려인 또는 다른 반려동물과 함께 생활을 마스터 하기위한
            초급 퀴즈입니다.
          </h2>

          <button
            className="button1"
            onClick={() => navigate("/quizhome/quiz")}
          >
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
        <article className="information [ card1 ]">
          <span className="tag">STEP.2</span>
          <h2 className="title1">
            강아지와 반려인 또는 다른 반려동물과 함께 생활을 마스터 하기위한
            중급 퀴즈입니다.
          </h2>

          <button className="button1">
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
        <article className="information [ card1 ]">
          <span className="tag">STEP.3</span>
          <h2 className="title1">
            강아지와 반려인 또는 다른 반려동물과 함께 생활을 마스터 하기위한
            상급 퀴즈입니다.
          </h2>

          <button className="button1">
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
        <article className="information [ card1 ]">
          <span className="tag">STEP.4</span>
          <h2 className="title1">
            강아지와 반려인 또는 다른 반려동물과 함께 생활을 마스터 하기위한
            마지막 퀴즈입니다.
          </h2>

          <button className="button1">
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
