import { combineReducers } from "redux";

import alertReducer from "../reducers/alertReducer";
import authReducer from "../reducers/authReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
});
