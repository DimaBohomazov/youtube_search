import React from 'react';
import {connect} from "react-redux";
import {fetchMovies, resetMovieList} from "../store/actions/youtube";
import {Link} from "react-router-dom";

const Pagination = (props) => {
    const reset = () => {
        const input = document.getElementById('form-input')
        input.value = ''
        return props.resetMovieList()
    }
    return (
        <div className='custom-pagination'>
            {props.previous &&
                <button
                    className='btn btn-outline-secondary btn__pagination btn--prev'
                    onClick={()=> props.fetchMovies(props.previous)}
                >
                    Prev
                </button>
            }
            <Link
                className='btn btn-outline-secondary btn__pagination btn--prev'
                onClick={()=> reset()}
                to='/'
            >
                Reset
            </Link>
            {props.next &&
                <button
                    className='btn btn-outline-secondary btn__pagination btn--next '
                    onClick={() => props.fetchMovies(props.next)}
                >
                    Next
                </button>
            }
        </div>
    );
}
function mapStateToProps(state){
    return{
        previous: state.youtube.prevPageToken,
        next: state.youtube.nextPageToken
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchMovies:(page) => dispatch(fetchMovies(page)),
        resetMovieList:() => dispatch(resetMovieList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);