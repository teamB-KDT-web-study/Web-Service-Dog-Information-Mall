export function BoardCreate({
  onContentSave,
  onTitleEditEvent,
  onBodyEditEvent,
  content,
}) {
  return (
    <main className="BoardCreate">
      <h1>글쓰기 페이지</h1>
      <div className="title">
        제목:
        <input
          placeholder="제목을 입력해 주세요."
          type="text"
          value={content.title}
          onChange={onTitleEditEvent}
        />
      </div>
      <div className="content">
        <textarea
          cols="50"
          rows="10"
          placeholder="글을 입력해주세요."
          value={content.body}
          onChange={onBodyEditEvent}
        ></textarea>
      </div>
      <div className="btn">
        <button onClick={onContentSave}>글저장</button>
      </div>
    </main>
  );
}
