import axios from 'axios'
import { YOUTUBE_API_KEY } from '../../api/key'

import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    SEND_VALUE,
    GET_MOVIE,
    RESET_MOVIE_LIST,
    REMOVE_INPUT_VALUE,
    SET_ERROR
} from './actionTypes'

function request(value, page){
    console.log('aaaa', page)
    if (page){
        return  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${value}&pageToken=${page}&key=${YOUTUBE_API_KEY}`
    } else {
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&q=${value}&key=${YOUTUBE_API_KEY}`
    }
}

export function fetchMovies(page=null) {
    return async (dispatch, getState) => {
        const value = getState().youtube.inputValue
        dispatch(fetchMoviesStart())
        try{
            const response = await axios.get(request(value, page))
            dispatch(fetchMoviesSuccess(response.data))
        }catch(e){
            dispatch(setError())
        }
    }
}
export function fetchMoviesStart() {
    return{
        type: FETCH_MOVIES_START
    }
}
export function fetchMoviesSuccess(data){
    return{
        type: FETCH_MOVIES_SUCCESS,
        movies: data.items,
        nextPageToken: data.nextPageToken,
        prevPageToken: data.prevPageToken,
        searchingResult: data.pageInfo.totalResults
    }
}

export function sendValue (value){
    return{
        type: SEND_VALUE,
        inputValue: value
    }
}
export function getMovie(index){
    return{
        type: GET_MOVIE,
        index: index
    }
}
export function resetMovieList(){
    return{
        type: RESET_MOVIE_LIST,
        movies: [],
    }
}
export function removeInputValue() {
    return{
        type: REMOVE_INPUT_VALUE,
        inputValue: ''
    }
}
export function setError(){
    return{
        type: SET_ERROR
    }
}