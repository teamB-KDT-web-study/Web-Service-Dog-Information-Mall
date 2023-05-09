import boardReducer from "./boardReducer";
import mainReducer from "./mainReducer";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  board: boardReducer,
  main: mainReducer,
});

export default rootReducer;
