import "../styles/boardcreate.scss";

export function BoardCreate({
  onContentSave,
  onTitleEditEvent,
  onBodyEditEvent,
  content,
  onBack
}) {
  return (
    <main className="BoardCreate">
      <div className="container">
        <div className="title">
          <input
            placeholder="제목을 입력해 주세요."
            type="text"
            value={content.title}
            onChange={onTitleEditEvent}
          />
        </div>
        <div className="content">
          <textarea
            placeholder="글을 입력해주세요."
            value={content.body}
            onChange={onBodyEditEvent}
          ></textarea>
        </div>
        <div className="btn">
          <button onClick={onContentSave}>글저장</button>
          <button onClick={onBack}>취소</button>
        </div>
      </div>
    </main>
  );
}
