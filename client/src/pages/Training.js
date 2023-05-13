import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/training.scss";
export function Training({ mostLikeList, onNavigate }) {
  return (
    <div className="Trainingbody">
      <div className="Trainingheader" style={{ color: "#987654" }}>
        정보 공유
      </div>
      <div className="Trainingheader2">#가장 많은 추천을 받은 글이에요!</div>
      <div className="Training">
        <div className="cards">
          <article className="information [ card ]">
            <span className="tag">추천수 {mostLikeList[0].like_count}</span>
            <h2 className="title">{mostLikeList[0].title}</h2>
            <p className="info">{mostLikeList[0].body}...</p>
            <button
              className="button"
              onClick={() => onNavigate("/board/" + mostLikeList[0].id)}
            >
              <span>자세히 보러가기</span>
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
            <span className="tag">추천수 {mostLikeList[1].like_count}</span>
            <h2 className="title">{mostLikeList[1].title}</h2>
            <p className="info">{mostLikeList[1].body}...</p>
            <button
              className="button"
              onClick={() => onNavigate("/board/" + mostLikeList[1].id)}
            >
              <span>자세히 보러가기</span>
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
            <span className="tag">추천수 {mostLikeList[2].like_count}</span>
            <h2 className="title">{mostLikeList[2].title}</h2>
            <p className="info">{mostLikeList[2].body}...</p>
            <button
              className="button"
              onClick={() => onNavigate("/board/" + mostLikeList[2].id)}
            >
              <span>자세히 보러가기</span>
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
            <span className="tag">추천수 {mostLikeList[3].like_count}</span>
            <h2 className="title">{mostLikeList[3].title}</h2>
            <p className="info">{mostLikeList[3].body}...</p>
            <button
              className="button"
              onClick={() => onNavigate("/board/" + mostLikeList[3].id)}
            >
              <span>자세히 보러가기</span>
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
    </div>
  );
}
