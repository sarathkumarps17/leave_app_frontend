import action from "./api";
import setAuthToken from "../../utils/setAuthToken";
import {
    LEAVE_FETCHED,
    FAILED_LEAVE_FETCHING
} from "../types";

import { setAlert } from "./alert";

export const applayLeave = (leaveData) => async (dispatch) => {
    try {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({ ...leaveData });
            let res = await action.post("user/applayLeave", body, config);
            console.log(res.status);
            if (res.status === 200) {
                dispatch(setAlert("Leave Aplication Submitted", "success"));
                return true
            }
        }
    } catch (error) {
        dispatch(setAlert("Failed Leave submission", "warning"));
        return false
    }
}

export const getLeaveRequests = () => async (dispatch) => {
    try {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            let res = await action.get(`user/leaveRequests/`);
            console.log(res.data);
            if (res.data) {
                dispatch(
                    {
                        type: LEAVE_FETCHED,
                        payload: res.data,
                    }
                )
                dispatch(setAlert("Leave applications fetched", "success"));
            }
        }
    } catch (error) {
        console.log(error);
        dispatch(
            {
                type: FAILED_LEAVE_FETCHING,
            }
        )
        dispatch(setAlert("Failed fetching leave application", "warning"));
    }
}