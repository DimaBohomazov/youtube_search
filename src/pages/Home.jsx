import React from 'react';
import {connect} from 'react-redux'
import Card from '../components/Card'
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home=(props) => {
    return (
        <div className='home-page'>
            {props.movies.length > 1 && <Pagination />}
            <ul className='row movie-list'>
                {
                props.loading
                    ? <Loader />
                    : props.movies.map((movie, index) => (
                        <li className='col-md-6 mb-2 movie-list__item' key={movie.etag+index}>
                            <Card
                                id={movie.id.videoId}
                                movieTitle={movie.snippet.title}
                                logo={movie.snippet.thumbnails}
                                index={index}
                            />
                        </li>
                        )
                    )
                }
            </ul>
            {props.movies.length > 1 && <Pagination />}
        </div>
    );
}
function mapStateToProps(state){
    return{
        movies: state.youtube.movies,
        loading: state.youtube.loading,
    }
}

export default connect(mapStateToProps)(Home);
