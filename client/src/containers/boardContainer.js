import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { BoardCreate } from "../pages/BoardCreate";
import { BoardDetail } from "../pages/BoardDetail";
import { BoardPage } from "../pages/BoardPage";
import axios from "axios";
import { API_BASE_URL } from "./app-config";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import {
  getData,
  getLength,
  getPageList,
  getAllData,
  getNewData,
  getSearchWord,
  getSelectOption,
  getSearchData,
  getSearchMode,
  addLike,
} from "../store/boardReducer";

////////////////////////////////////////////////////////////////////////////////
export const BoardPageContainer = ({ userId }) => {
  const params = useParams();
  const pageId = params.pageId;
  const navigate = useNavigate();
  const contents = useSelector((state) => state.board.allData);
  const contentsLength = useSelector((state) => state.board.length);
  // const pageList = useSelector((state) => state.board.pageList);
  const selectOption = useSelector((state) => state.board.selectOption);
  const searchWord = useSelector((state) => state.board.searchWord);
  const searchData = useSelector((state) => state.board.searchData);
  const searchMode = useSelector((state) => state.board.searchMode);
  let pageNum = [];
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const option = searchParams.get("option");
  const query = searchParams.get("query");

  useEffect(() => {
    if (!searchMode) {
      dispatch(getSearchData([]));
      dispatch(getSearchWord(""));
      dispatch(getSelectOption("title"));
      dispatch(getSearchMode(false));
      const getContents = async () => {
        const res = await axios.get(API_BASE_URL + "/board/" + pageId);
        dispatch(getAllData(res.data.data));
        dispatch(getLength(res.data.length));
      };
      getContents();
    }
  }, [pageId, searchMode]);

  const getPageNum = (conLen) => {
    pageNum = [];
    const totalPageNum = Math.ceil(conLen / 8);
    for (let i = 0; i < totalPageNum; i++) {
      pageNum.push(i + 1);
    }
    return pageNum;
  };

  pageNum = getPageNum(contentsLength);

  const onSelect = (e) => {
    dispatch(getSelectOption(e.target.value));
  };
  const onSearchWord = (e) => {
    dispatch(getSearchWord(e.target.value));
  };
  const onCompleteSearch = async () => {
    const trimedWord = searchWord.trim();
    if (trimedWord === "") {
      alert("검색 키워드를 입력하세요.");
      return;
    }
    const res = await axios.get(
      `${API_BASE_URL}/board/searchContent/1?option=${selectOption}&query=${trimedWord}`
    );
    dispatch(getSearchData(res.data.data));
    dispatch(getSearchMode(true));
    dispatch(getSearchWord(""));
    dispatch(getLength(res.data.length));
    navigate(`/board/page/1?option=${selectOption}&query=${trimedWord}`);
  };
  const searchMovePage = async (el) => {
    const trimedWord = query.trim();
    const res = await axios.get(
      `${API_BASE_URL}/board/searchContent/${el}?option=${selectOption}&query=${trimedWord}`
    );
    navigate(`/board/page/${el}?option=${selectOption}&query=${trimedWord}`);
    dispatch(getSearchData(res.data.data));
    dispatch(getLength(res.data.length));
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onCompleteSearch();
    }
  };
  const onBack = () => {
    navigate("/board/page/1");
    dispatch(getSearchMode(false));
    dispatch(getSearchData([]));
  };
  const createContent = () => {
    if (userId.isLogin == false) {
      alert("글을 쓸 권한이 없습니다.");
      return;
    } else {
      navigate("/board/create");
    }
  };

  return (
    <BoardPage
      pageNum={pageNum}
      contents={contents}
      navigate={navigate}
      onSelect={onSelect}
      onSearchWord={onSearchWord}
      searchWord={searchWord}
      onCompleteSearch={onCompleteSearch}
      selectOption={selectOption}
      searchData={searchData}
      searchMode={searchMode}
      onEnter={onEnter}
      onBack={onBack}
      pageId={pageId}
      searchMovePage={searchMovePage}
      createContent={createContent}
    />
  );
};

////////////////////////////////////////////////////////////////////////////////
export const BoardDetailContainer = ({ userId }) => {
  const navigate = useNavigate();
  const contentDetail = useSelector((state) => state.board.data);
  const dispatch = useDispatch();
  const { contentId } = useParams();
  const [readOnly, setReadOnly] = useState(true);
  useEffect(() => {
    const getContentDetail = async () => {
      const res = await axios.get(API_BASE_URL + "/board/detail/" + contentId);
      dispatch(getData(res.data));
    };
    getContentDetail();
  }, []);
  const onStartEditContent = () => {
    setReadOnly(!readOnly);
  };
  const onCompleteEditContent = () => {
    editContent(contentDetail);
    alert("글 수정이 완료되었습니다.");
    setReadOnly(!readOnly);
  };
  const onTitleEditEvent = (e) => {
    if (readOnly === false) {
      const newData = {
        id: contentDetail.id,
        nickname: contentDetail.nickname,
        title: e.target.value,
        body: contentDetail.body,
        view_count: contentDetail.view_count,
        like_count: contentDetail.like_count,
        date: contentDetail.date,
        ["user.grade"]: contentDetail["user.grade"],
      };
      dispatch(getData(newData));
    } else {
      return;
    }
  };
  const onBodyEditEvent = (e) => {
    if (readOnly === false) {
      const newData = {
        id: contentDetail.id,
        nickname: contentDetail.nickname,
        title: contentDetail.title,
        body: e.target.value,
        view_count: contentDetail.view_count,
        like_count: contentDetail.like_count,
        date: contentDetail.date,
        ["user.grade"]: contentDetail["user.grade"],
      };
      dispatch(getData(newData));
    }
  };
  const editContent = async (newContent) => {
    await axios.patch(
      API_BASE_URL + "/board/editContent/" + contentId,
      newContent
    );
  };
  const deleteContent = async () => {
    await axios.delete(API_BASE_URL + "/board/deleteContent/" + contentId);
  };
  const onDeleteContent = () => {
    if (window.confirm("이 글을 삭제하시겠습니까?")) {
      deleteContent();
      alert("글이 삭제되었습니다!");
      navigate(-1);
    } else {
      alert("글 삭제를 취소합니다!");
    }
  };
  const onAddLike = async () => {
    if (!userId.isLogin) {
      alert("로그인이 필요합니다!");
      return;
    }
    const check = await axios.post(
      API_BASE_URL + "/board/addLikeList/" + contentId,
      {
        userNickname: userId.nickname,
        like_count: contentDetail.like_count,
      }
    );
    if (check.data === true) {
      dispatch(addLike()); // 화면 표시
      const res = await axios.patch(
        API_BASE_URL + "/board/addLike/" + contentId,
        {
          like_count: contentDetail.like_count,
        }
      ); // 백엔드 반영
    } else {
      alert("이미 추천하셨습니다.");
    }
  };

  return (
    <BoardDetail
      content={contentDetail}
      onStartEditContent={onStartEditContent}
      onCompleteEditContent={onCompleteEditContent}
      onTitleEditEvent={onTitleEditEvent}
      onBodyEditEvent={onBodyEditEvent}
      readOnly={readOnly}
      onDeleteContent={onDeleteContent}
      onAddLike={onAddLike}
      userId={userId}
    />
  );
};

////////////////////////////////////////////////////////////////////////////////
export const BoardCreateContainer = ({ userId }) => {
  // TODO : 로그인 유저 정보 불러와서 prop 줘야함!!!
  const navigate = useNavigate();
  const contentDetail = useSelector((state) => state.board.newData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewData({ nickname: "", title: "", body: "", date: "" }));
  }, []);

  const timestamp = () => {
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  };
  const titleEditEvent = (e) => {
    const newData = {
      nickname: "",
      title: e.target.value,
      body: contentDetail.body,
      date: "",
    };
    dispatch(getNewData(newData));
  };
  const bodyEditEvent = (e) => {
    const newData = {
      nickname: "",
      title: contentDetail.title,
      body: e.target.value,
      date: "",
    };
    dispatch(getNewData(newData));
  };
  const contentSave = async () => {
    const nowTime = timestamp();
    const newContent = {
      nickname: userId.nickname,
      title: contentDetail.title,
      body: contentDetail.body,
      date: nowTime,
    };
    console.log(newContent);

    await axios.post(API_BASE_URL + "/board/addContent", newContent);
    alert("작성하신 글이 제출되었습니다!");
    navigate(-1);
  };
  const onBack = () => {
    if (window.confirm("정말로 쓰던 글을 삭제하고 뒤로 가시겠습니까?")) {
      navigate(-1);
    } else {
      return;
    }
  };

  return (
    <BoardCreate
      onContentSave={contentSave}
      onTitleEditEvent={titleEditEvent}
      onBodyEditEvent={bodyEditEvent}
      content={contentDetail}
      onBack={onBack}
    />
  );
};
////////////////////////////////////////////////////////////////////////////////
