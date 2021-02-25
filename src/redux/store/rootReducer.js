import { combineReducers } from "redux";

import alertReducer from "../reducers/alertReducer";
import authReducer from "../reducers/authReducer";
import leaveReducer from "../reducers/leaveReducer";
import SidebarReducer from "../reducers/SidebarReducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  leave: leaveReducer,
  visible: SidebarReducer
});
