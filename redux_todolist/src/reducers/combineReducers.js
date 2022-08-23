import { combineReducers } from "redux";
import todos from "./todos";
import category from "./category";

export default combineReducers({
  todos,
  category,
});
