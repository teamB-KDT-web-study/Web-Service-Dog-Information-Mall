import BoardItem from "../components/BoardItem";

export function BoardPage({
  contents,
  navigate,
  onSelect,
  onSearchWord,
  searchWord,
  onCompleteSearch,
  selectOption,
  searchData,
  searchMode,
  onEnter,
}) {
  return (
    <main className="BoardPage">
      <h1>게시판 페이지</h1>
      <div className="searchBox">
        <select
          name="search"
          id="search"
          value={selectOption}
          onChange={onSelect}
        >
          <option value="title">제목</option>
          <option value="body">내용</option>
        </select>
        <input
          type="text"
          className="searchInput"
          value={searchWord}
          onChange={onSearchWord}
          onKeyPress={onEnter}
        />
        <button className="searchBtn" onClick={onCompleteSearch}>
          검색
        </button>
      </div>
      <div className="createBtn">
        <button onClick={() => navigate("/board/create")}>글쓰기</button>
      </div>
      <div>
        {!searchMode &&
          contents.map((content) => {
            return <BoardItem key={content.id} content={content} />;
          })}
        {searchMode && searchData.length < 1 ? (
          <div>해당 검색 결과를 찾을 수 없습니다.</div>
        ) : (
          searchData.map((content) => {
            return <BoardItem key={content.id} content={content} />;
          })
        )}
      </div>
    </main>
  );
}
