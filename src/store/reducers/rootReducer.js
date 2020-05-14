import {combineReducers} from "redux"
import youtubeReducer from "./youtube"

export default combineReducers({
    youtube: youtubeReducer
})