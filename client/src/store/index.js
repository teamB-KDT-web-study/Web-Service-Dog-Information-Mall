import boardReducer from "./boardReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  board: boardReducer,
});

export default rootReducer;
