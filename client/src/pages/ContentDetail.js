import { useParams, useNavigate } from "react-router-dom";

function ContentDetail() {
  const navigate = useNavigate();
  return (
    <main className="ContentDetail">
      <h1>글 디테일 페이지</h1>
      <div className="container">
        <div className="title">
          <h1>제목 : </h1>
        </div>
        <div className="content">
          <h3>내용 : </h3>
          <div></div>
        </div>
        <div className="likes">
          <h3>좋아요 : </h3>
        </div>
        <div className="editBtn">
          <button>글수정</button>
        </div>
        <div className="btn">
          <button onClick={() => navigate(-1)}>목록보기</button>
          <button onClick={() => navigate("/board")}>홈으로 이동</button>
        </div>
      </div>
    </main>
  );
}

export default ContentDetail;
