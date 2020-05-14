import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    SEND_VALUE,
    GET_MOVIE,
    RESET_MOVIE_LIST,
    REMOVE_INPUT_VALUE,
    SET_ERROR
} from "../actions/actionTypes";
const initialState = {
    movie: {},
    movies: [],
    nextPageToken: '',
    prevPageToken: '',
    inputValue: '',
    searchingResult: 1,
    loading: false,
    error: false
}

export default function youtubeReducer(state= initialState, action){
    switch(action.type){
        case FETCH_MOVIES_START:
            return{
                ...state, loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return{
                ...state,
                movies: action.movies,
                nextPageToken: action.nextPageToken,
                prevPageToken: action.prevPageToken,
                searchingResult: action.searchingResult,
                loading: false,
                error: false
            }
        case SEND_VALUE:
            return{
                ...state,
                inputValue: action.inputValue
            }
        case GET_MOVIE:
            return{
                ...state,
                movie: state.movies[action.index]
            }
        case RESET_MOVIE_LIST:
            return{
                ...state,
                movies: action.movies,
            }
        case REMOVE_INPUT_VALUE:
            return{
                ...state,
                inputValue: action.inputValue
            }
        case SET_ERROR:
            return{
                ...state,
                error: true
            }
        default:
            return state
    }
}