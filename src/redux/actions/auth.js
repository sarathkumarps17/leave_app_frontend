import setAuthToken from "../../utils/setAuthToken";
import {
  AUTH_SUCSUSS,
  AUTH_FAILURE,
  LOGOUT,
  TOKEN_VALID,
  TOKEN_EXPRIED,
} from "../types";

import { setAlert } from "./alert";

import action from "./api";

////////////////////////////////LOGIN Advertiser////////////////////////////

export const login = (userName, password) => async (dispatch) => {
  try {
    let res;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ userName, password });
    res = await action.post(`/login`, body, config);
    // console.log(res.data);
    dispatch({
      type: AUTH_SUCSUSS,
      payload: res.data,
    });
    dispatch(setAlert("You have Logged In", "success"));
  } catch (err) {
    dispatch({ type: AUTH_FAILURE });
    dispatch(setAlert(err.response.data.err, "danger"));
  }
};

//////////////Varify Token ///////////////////////////////////////////
export const checkToken = () => async (dispatch) => {
  if (!localStorage.token) {
    dispatch({
      type: TOKEN_EXPRIED,
    });
  }
  setAuthToken(localStorage.token);
  try {
    let res = await action.get("advertiser/auth");
    if (res.status !== 200) {
      dispatch({
        type: TOKEN_EXPRIED,
      });
    }
    dispatch({
      type: TOKEN_VALID,
    });
  } catch (error) {
    dispatch({
      type: TOKEN_EXPRIED,
    });
  }
};

////////////////////// LOGOUT ////////////////////////////////////////////
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert("logged Out", "warning"));
};

// export const updateDetails = (details) => async (dispatch) => {

//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//     try {
//       let res;
//       res = await action.post(`/advertiser/edit`, details);
//       dispatch({
//         type: UPDATE_SUCSUSS,
//         payload: res.data._doc,
//       });
//       dispatch(setAlert("Profile Updated", "success"));
//     } catch (err) {
//       console.log(err.response.data.err);
//       dispatch(setAlert("Profile Updation Failed", "danger"));
//     }
//   }
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
