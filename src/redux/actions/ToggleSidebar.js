import { TOGGLE_SIDEBAR } from "../types"
const toggleSideBar = () => (dispatch) => {
    dispatch({ type: TOGGLE_SIDEBAR });
}
export default toggleSideBar;