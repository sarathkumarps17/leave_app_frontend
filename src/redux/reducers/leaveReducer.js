/* eslint-disable import/no-anonymous-default-export */
import {
    LEAVE_FETCHED,
    FAILED_LEAVE_FETCHING,
    LOGOUT
} from "../types";

const initialState = {
    loading: true,
    leave: []
};

export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case LEAVE_FETCHED:
            return {
                ...state,
                leave: [...payload],
                loading: false,

            };

        case FAILED_LEAVE_FETCHING:
        case LOGOUT:
            return {
                ...state,
                loading: true,
                leave: []
            };
        default:
            return state;
    }
}
