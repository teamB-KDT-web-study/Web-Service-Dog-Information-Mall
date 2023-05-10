import boardReducer from "./boardReducer";
import mainReducer from "./mainReducer";
import chatBotReducer from "./chatBotReducer";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  board: boardReducer,
  main: mainReducer,
  chatBot: chatBotReducer,
});

export default rootReducer;
