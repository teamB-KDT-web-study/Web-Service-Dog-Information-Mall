function ContentCreate() {
  return (
    <main className="ContentCreate">
        <h1>글쓰기 페이지</h1>
      <div className="title">
        제목:
        <input type="text" />
      </div>
      <div className="content">
        <textarea
          cols="50"
          rows="10"
          placeholder="글을 입력해주세요."
        ></textarea>
      </div>
      <div className="btn">
        <button>글저장</button>
      </div>
    </main>
  );
}

export default ContentCreate;
