import "../styles/boarddetail.scss";
import { useNavigate } from "react-router-dom";

export function BoardDetail({
  content,
  onStartEditContent,
  onCompleteEditContent,
  onTitleEditEvent,
  onBodyEditEvent,
  readOnly,
  onDeleteContent,
  onUpdateLike,
  userId,
}) {
  const navigate = useNavigate();
  return (
    <main className="BoardDetail">
      <div className="container">
        <div className="title">
          <input
            type="text"
            value={content.title}
            onChange={onTitleEditEvent}
            disabled={readOnly}
          />
        </div>
        <div className="secondLine">
          <div className="timeViewLike">
            <div className="time">
              {new Intl.DateTimeFormat("ko-KR").format(new Date(content.date))}
            </div>
            {/* <div className="like">추천 : {content.like_count}</div> */}
            <div className="view">조회수 : {content.view_count + 1}</div>
          </div>
          <div className="likeBtn">
            <button onClick={onUpdateLike}>💖 {content.like_count}</button>
          </div>
        </div>
        <div className="authur">
          <div>글쓴이: {content.nickname}</div>
        </div>
        <div className="content">
          <textarea
            value={content.body}
            onChange={onBodyEditEvent}
            disabled={readOnly}
          />
        </div>
        {content.nickname === userId.nickname ? (
          <div>
            <div className="editBtn">
              {!readOnly && (
                <button onClick={onCompleteEditContent}>수정완료</button>
              )}
              {readOnly ? (
                <button onClick={onStartEditContent}>글수정</button>
              ) : (
                <button onClick={onStartEditContent}>취 소</button>
              )}
              {!readOnly && <button onClick={onDeleteContent}>글삭제</button>}
              <button className="toContentBtn" onClick={() => navigate(-1)}>
                목록으로
              </button>
            </div>
            <div className="editMsg">
              {!readOnly && <div>제목과 내용을 자유롭게 수정해보세요.</div>}
            </div>
          </div>
        ) : (
          <div className="editBtn">
            <button className="toContentBtn" onClick={() => navigate(-1)}>
              목록으로
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
