import { Link } from "react-router-dom";

function BoardItem({ content }) {
  return (
    <Link to={"/board/" + content.id}>
      <ul className="BoardItem">
        <li>글 제목: {content.title}</li>
        <li>
          추천: {content.recommend_count}, 조회수: {content.view_count}
        </li>
      </ul>
    </Link>
  );
}

export default BoardItem;
