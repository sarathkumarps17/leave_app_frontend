import { combineReducers } from "redux";

import alertReducer from "../reducers/alertReducer";
import authReducer from "../reducers/authReducer";
import SidebarReducer from "../reducers/SidebarReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  visible: SidebarReducer
});
