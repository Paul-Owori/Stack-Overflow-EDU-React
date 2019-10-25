import { combineReducers } from "redux";
import userReducer from "./userReducer";
// import qnReducer from "./qnReducer";
// import answerReducer from "./answerReducer";

export default combineReducers({
  user: userReducer
  // qn: qnReducer,
  // answer: answerReducer,
});