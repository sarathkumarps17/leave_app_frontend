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
        console.log("requested")
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            let res = await action.get(`user/leaveRequests/`);
            // console.log(res.data);
            if (res.data) {
                dispatch(
                    {
                        type: LEAVE_FETCHED,
                        payload: res.data,
                    }
                )
                dispatch(setAlert("Leave applications fetched", "success"));
            } else {
                dispatch(
                    {
                        type: FAILED_LEAVE_FETCHING,
                    }
                )
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

export const confirmLeaveRequest = (leaveId, dateIds, aprovalStatus) => async (dispatch) => {
    try {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({ leaveId, dateIds, aprovalStatus });
            let res = await action.put("user/confirmLeaveRequest", body, config);
            console.log(res.status);
            if (res.status === 200) {
                await dispatch(getLeaveRequests);
                dispatch(setAlert(`Leave ${aprovalStatus} `, "success"));

            }
        }
    } catch (error) {
        dispatch(setAlert("Failed Leave confirmation", "warning"));

    }
}

export const getUserLeave = () => async (dispatch) => {
    try {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            let res = await action.get(`user/userLeave/`);
            console.log(res.data);
            if (res.data) {
                dispatch(
                    {
                        type: LEAVE_FETCHED,
                        payload: res.data,
                    }
                )
                dispatch(setAlert("User's Leave fetched", "success"));
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


export const getSubdivisionStrength = () => async (dispatch) => {
    try {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
            let res = await action.get(`user/strength/`);
            if (res.data) {
                dispatch(setAlert("Strength Fetched", "success"));
                return res.data;

            }
        }
    } catch (error) {
        console.log(error);
        return null
        //     dispatch(
        //         {
        //             type: FAILED_LEAVE_FETCHING,
        //         }
        //     )
        //     dispatch(setAlert("Failed fetching leave application", "warning"));
    }

}

