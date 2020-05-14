import React from 'react';
import {connect} from "react-redux";
import ErrorBoundary from "../components/hoc/ErrorBoundary";
import {setError} from "../store/actions/youtube";

const Movie = (props) => {
    const movieId = () => {
        const path = window.location.pathname
        return path.slice(path.lastIndexOf('/') + 1)
    }
    if(!props.title){
        props.setError()
    }
    return (
        <div className='movie'>
            {!props.title
                ? null
                :<div>
                        <button
                            className='btn btn-outline-secondary'
                            onClick={()=>window.history.back()}
                        >
                            Back
                        </button>
                    </div>
            }
            <div className='movie__video-container'>
                <iframe
                    className='video'
                    src={`https://www.youtube.com/embed/${movieId()}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title='youtube-player'
                >
                </iframe>
            </div>
            <ErrorBoundary>
                <h1 className='movie__title'>{props.title}</h1>
                <div className="movie__info">
                    {props.time &&
                    <div className='movie__date'>{new Date(props.time).toLocaleDateString()}</div>
                    }
                    <h3 className='movie__channel'>{props.channel}</h3>
                    <p className='movie__descriptions'>{props.description}</p>
                </div>
            </ErrorBoundary>
        </div>
    );
}
function mapStateToProps(state) {
    try {
        return {
            title: state.youtube.movie.snippet.title,
            channel: state.youtube.movie.snippet.channelTitle,
            description: state.youtube.movie.snippet.description,
            time: state.youtube.movie.snippet.publishTime
        }
    } catch (e) {
        console.log(e)
    }
}
function mapDispatchToProps(dispatch){
    return{
        setError:() => dispatch(setError()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);