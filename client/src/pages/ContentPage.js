import ContentItem from "../components/ContentItem";
import ContentCreate from "./ContentCreate";
import { Link } from "react-router-dom";

function ContentPage() {
  return (
    <main className="ContentPage">
      <h1>게시판 페이지</h1>
      <div className="searchBox">
        <select name="search" id="search">
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>
        <input type="text" className="searchInput" />
        <button className="searchBtn">검색</button>
      </div>
      <div className="createBtn">
        <Link to={"/board/create"}>글쓰기</Link>
      </div>
      <ContentItem />
      {/* <div>
        {products.map((product) => {
          return <ContentItem />;
        })}
      </div> */}
    </main>
  );
}

export default ContentPage;
