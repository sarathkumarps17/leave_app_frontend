

import {
    TOGGLE_SIDEBAR
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = true, action) {
    let { type } = action;
    switch (type) {
        case TOGGLE_SIDEBAR:
            return !state
        default:
            return state;
    }
}
