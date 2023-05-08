import "../styles/boarditem.scss";

import { Link } from "react-router-dom";

function BoardItem({ content }) {
  return (
    <Link to={"/board/" + content.id}>
      <div className="BoardItem">
        <div className="title">{content.title}</div>
        <div className="viewLike">
          <div className="view">추천: {content.like_count}</div>
          <div className="like">조회수: {content.view_count}</div>
        </div>
      </div>
    </Link>
  );
}

export default BoardItem;
