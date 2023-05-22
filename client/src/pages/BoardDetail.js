import "../styles/boarddetail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function BoardDetail({
  content,
  onStartEditContent,
  onCompleteEditContent,
  onTitleEditEvent,
  onBodyEditEvent,
  readOnly,
  onDeleteContent,
  onUpdateLike,
  userId,
  like,
  likeChange,
}) {
  // const { contentId } = useParams();
  // const [like, setLike] = useState(false);
  // useEffect(() => {
  //   const getContentDetail = async () => {
  //     const res = await axios.get(
  //       process.env.REACT_APP_DB_HOST + '/board/detail/' + contentId
  //     );
  //     const user = await axios.get(
  //       process.env.REACT_APP_DB_HOST + "/member/checkLogin"
  //     );
  //     if (res.data.like_nicknames) {
  //       for (let i of res.data.like_nicknames) {
  //         console.log('i >> ', i);
  //         if (i == user.data.nickname) setLike(true);
  //       }
  //     }

  //   };
  //   getContentDetail();

  // }, []);
  console.log(like);
  const navigate = useNavigate();
  return (
    <main className="BoardDetail">
      <div className="container">
        <div className="top">
          <div className="title">
            <input
              type="text"
              value={content.title}
              onChange={onTitleEditEvent}
              disabled={readOnly}
            />
          </div>
          <div className="secondLine">
            <div className="authur">
              <img
                src={`${process.env.PUBLIC_URL}/profile_img/${content["user.profile_img"]}`}
              ></img>
              {content.nickname}
            </div>
            <div className="time">
              {new Intl.DateTimeFormat("ko-KR").format(new Date(content.date))}
            </div>
          </div>
        </div>
        <div className="content">
          <textarea
            value={content.body}
            onChange={onBodyEditEvent}
            disabled={readOnly}
          />
        </div>
        <div className="ViewLike">
          {/* <div className="like">추천 : {content.like_count}</div> */}
          <div className="view">조회수 {content.view_count + 1}</div>
          <button
            className="likeButton"
            onClick={() => {
              onUpdateLike();
              if (userId.isLogin) likeChange();
              // if (userId.isLogin) setLike(!like);
            }}
          >
            <img
              src={
                like
                  ? `${process.env.PUBLIC_URL}/SlickImages/fullHeart.JPG`
                  : `${process.env.PUBLIC_URL}/SlickImages/emptyHeart.JPG`
              }
              // style={{ width: '20px', height: '20px' }}
            />{" "}
            {/* 💖 {content.like_count} */}
          </button>
          {content.like_count}
        </div>

        {content.nickname === userId.nickname ? (
          <div>
            <div className="editBtn">
              {!readOnly && (
                <button onClick={onCompleteEditContent}>수정완료</button>
              )}
              {readOnly ? (
                <button onClick={onStartEditContent}>글수정</button>
              ) : (
                <button onClick={onStartEditContent}>취 소</button>
              )}
              {!readOnly && <button onClick={onDeleteContent}>글삭제</button>}
              <button className="toContentBtn" onClick={() => navigate(-1)}>
                목록으로
              </button>
            </div>
            <div className="editMsg">
              {!readOnly && <div>제목과 내용을 자유롭게 수정해보세요.</div>}
            </div>
          </div>
        ) : (
          <div className="editBtn">
            <button className="toContentBtn" onClick={() => navigate(-1)}>
              목록으로
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
