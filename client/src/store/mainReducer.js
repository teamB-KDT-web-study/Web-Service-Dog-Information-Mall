const GETDATA = "main/GETDATA";

export const getData = (data) => ({ type: GETDATA, payload: data });

const initialState = {
  data: [{},{},{},{}],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETDATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
