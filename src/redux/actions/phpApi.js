

import axios from "axios";
// const { REACT_APP_USER_API_URL } = process.env;
const action = axios.create({
    baseURL: "http://192.168.31.248/leave_management/",
});

export default action;