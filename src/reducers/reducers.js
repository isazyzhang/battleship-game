import { combineReducers } from "redux";
// import clickReducer from "./clickReducer";
import playerGameReducer from "./playerGameReducer";
import AIGameReducer from "./AIGameReducer";

export default combineReducers({
    playerGame: playerGameReducer,
    AIGame: AIGameReducer,
});