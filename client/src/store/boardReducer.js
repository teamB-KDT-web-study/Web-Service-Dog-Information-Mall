const GETALLDATA = "board/GETALLDATA";
const GETDATA = "board/GETDATA";
const GETNEWDATA = "board/GETNEWDATA";
const GETSEARCHWORD = "board/GETSEARCHWORD";
const GETSELECTOPTION = "board/GETSELECTOPTION";
const GETSEARCHDATA = "board/GETSEARCHDATA";
const GETSEARCHMODE = "board/GETSEARCHMODE";
const ADDLIKE = "board/ADDLIKE";

export const getAllData = (data) => ({ type: GETALLDATA, payload: data });
export const getData = (data) => ({ type: GETDATA, payload: data });
export const getNewData = (data) => ({ type: GETNEWDATA, payload: data });
export const getSearchWord = (data) => ({ type: GETSEARCHWORD, payload: data });
export const getSelectOption = (data) => ({
  type: GETSELECTOPTION,
  payload: data,
});
export const getSearchData = (data) => ({
  type: GETSEARCHDATA,
  payload: data,
});
export const getSearchMode = (data) => ({
  type: GETSEARCHMODE,
  payload: data,
});
export const addLike = () => ({
  type: ADDLIKE,
});

const initialState = {
  allData: [],
  data: {},
  newData: { user_id: "", title: "", body: "", date: "" },
  searchWord: "",
  selectOption: "title",
  searchData: [],
  searchMode: false,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALLDATA:
      return { ...state, allData: action.payload };
    case GETDATA:
      return { ...state, data: action.payload };
    case GETNEWDATA:
      return { ...state, newData: action.payload };
    case GETSEARCHWORD:
      return { ...state, searchWord: action.payload };
    case GETSELECTOPTION:
      return { ...state, selectOption: action.payload };
    case GETSEARCHDATA:
      return { ...state, searchData: action.payload };
    case GETSEARCHMODE:
      return { ...state, searchMode: action.payload };
    case ADDLIKE:
      return {
        ...state,
        data: {
          id: state.data.id,
          user_id: state.data.user_id,
          title: state.data.title,
          body: state.data.body,
          view_count: state.data.view_count,
          recommend_count: state.data.recommend_count + 1,
          date: state.data.date,
          ["user.grade"]: state.data["user.grade"],
          ["user.nickname"]: state.data["user.nickname"],
        },
      };

    default:
      return state;
  }
};

export default boardReducer;