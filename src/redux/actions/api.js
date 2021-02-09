import axios from "axios";
const { REACT_APP_USER_API_URL } = process.env;
const action = axios.create({
  baseURL: REACT_APP_USER_API_URL,
});

export default action;
