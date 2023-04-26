import { combineReducers } from "redux";
import heart from "./heart";

const rootReducer = combineReducers({
    water() { return 'Redux water' },
    heart
})

export default rootReducer