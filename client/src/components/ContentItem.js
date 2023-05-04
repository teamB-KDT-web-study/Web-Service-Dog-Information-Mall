import { Link } from "react-router-dom";

function ContentItem() {
  return (
    <Link to={"/board/1"}>
      <ul className="ContentItem">
        <li>글 제목: </li>
        <li>좋아요: </li>
      </ul>
    </Link>
  );
}

export default ContentItem;
