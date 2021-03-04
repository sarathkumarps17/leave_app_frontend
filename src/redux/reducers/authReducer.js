/* eslint-disable import/no-anonymous-default-export */
import {
  AUTH_SUCSUSS,
  AUTH_FAILURE,
  LOGOUT,
  TOKEN_EXPRIED,
  TOKEN_VALID,
} from "../types";

const initialState = {
  loading: true,
  token: localStorage.getItem("token"),
  userType: "",
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case AUTH_SUCSUSS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        loading: false,
        isAuthenticated: true,
      };
    case AUTH_FAILURE:
    case TOKEN_EXPRIED:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");
      return {
        ...state,
        token: null,
        loading: true,
        user: {},
        isAuthenticated: false,
      };
    case TOKEN_VALID:
      return {
        ...state,
        isAuthenticated: true,
      };

    default:
      return state;
  }
}
