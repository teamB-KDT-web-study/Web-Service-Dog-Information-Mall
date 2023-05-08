import BoardItem from "../components/BoardItem";
import { Link } from "react-router-dom";
import "../styles/boardpage.scss";

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
      <h1>훈련 정보 게시판</h1>
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
        <div className="searchInputBox">
          <input
            type="text"
            className="searchInput"
            value={searchWord}
            onChange={onSearchWord}
            onKeyPress={onEnter}
            placeholder="검색할 키워드를 입력해주세요."
          />
        </div>
        <button className="searchBtn" onClick={onCompleteSearch}>
          검색
        </button>
      </div>

      <div className="boraditems">
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
      <div className="boardFooter">
        <div className="pageNum">
          {[1, 2, 3].map((el) => {
            return <Link>[{el}]</Link>;
          })}
        </div>
        <button className="createBtn" onClick={() => navigate("/board/create")}>
          글쓰기
        </button>
      </div>
    </main>
  );
}
