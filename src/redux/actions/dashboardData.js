import action from "./api";
import setAuthToken from "../../utils/setAuthToken";
// import {
//     LEAVE_FETCHED,
//     FAILED_LEAVE_FETCHING
// } from "../types";

import { setAlert } from "./alert";

export const getMonthlyLeaveStat = () => async (dispatch) => {
    try {
        // console.log("requested")
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            let res = await action.get(`user/subdivisionLeaveStat/`);
            // console.log(res.data);
            if (res.data) {
                return res.data
            }
            return null
        }
    } catch (error) {
        console.log(error);
        dispatch(setAlert("Failed fetching leave application", "warning"));
        return null;
    }
}