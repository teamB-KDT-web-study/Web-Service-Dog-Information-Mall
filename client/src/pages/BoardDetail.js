export function BoardDetail({
  content,
  onStartEditContent,
  onCompleteEditContent,
  onTitleEditEvent,
  onBodyEditEvent,
  readOnly,
  onDeleteContent,
  onAddLike
}) {
  return (
    <main className="BoardDetail">
      <h1>글 디테일 페이지</h1>
      <div className="container">
        <div className="title">
          <h1>
            제목 :
            <input
              type="text"
              value={content.title}
              onChange={onTitleEditEvent}
            />
          </h1>
          <h3>글쓴이: {content.nickname}</h3>
          <h3>날짜: {content.date}</h3>
        </div>
        <div className="content">
          <h3>내용 : </h3>
          <div>
            <textarea
              cols="50"
              rows="10"
              value={content.body}
              onChange={onBodyEditEvent}
            />
          </div>
        </div>
        <div className="view">
          <h3>추천 : {content.like_count}</h3>
          <h3>조회수 : {content.view_count + 1}</h3>
        </div>
        <div className="likeBtn">
          <button onClick={onAddLike}>추천</button>
        </div>
        <div className="editBtn">
          <button onClick={onStartEditContent}>글수정</button>
          {!readOnly && (
            <button onClick={onCompleteEditContent}>수정완료</button>
          )}
          {!readOnly && (
            <button onClick={onDeleteContent}>글삭제</button>
          )}
        </div>
      </div>
    </main>
  );
}
