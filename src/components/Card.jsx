import React from 'react';
import {Link} from'react-router-dom'
import {connect} from 'react-redux'
import {getMovie} from '../store/actions/youtube'

const Card = (props) => {
    const {movieTitle, logo, id, index} = props

    return (
        <div className='card'>
            <div className="card-body">
                <div className="card-title">
                    <h4>{movieTitle}</h4>
                </div>
                <Link className=''
                      to={'/movie/' + id}
                      onClick={() => props.getMovie(index) }
                >
                    <img src={logo.high.url} alt="movie" className="card-img-top"/>
                </Link>
            </div>
        </div>
    );
}
function mapDispatchToProps(dispatch) {
    return{
        getMovie: (index) => dispatch(getMovie(index))
    }
}
export default connect(null, mapDispatchToProps)(Card);