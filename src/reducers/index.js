import { combineReducers } from "redux";
import { selectorsReducer, tableReducer, multiPriceReducer } from "../features";

export const rootReducer = combineReducers({
  selectorsReducer,
  tableReducer,
  multiPriceReducer
});
