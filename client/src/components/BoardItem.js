import '../styles/boarditem.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoardItem({ content }) {

  return (
    <Link to={'/board/' + content.id}>
      <div className="BoardItem">
        <div className="title">{content.title}</div>
        <div className="author">
          <img
            src={`${process.env.PUBLIC_URL}/profile_img/${content['user.profile_img']}`}
          ></img>
          {content.nickname}
        </div>
        <div className="body">{content.body}</div>
        <div className="viewLike">
          <div className="like">추천: {content.like_count}</div>
          <div className="view">조회수: {content.view_count}</div>
        </div>
      </div>
    </Link>
  );
}

export default BoardItem;
