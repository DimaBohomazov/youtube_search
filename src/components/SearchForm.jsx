import React from 'react';
import {connect} from 'react-redux'
import {fetchMovies, sendValue, removeInputValue} from '../store/actions/youtube'
import {Link} from "react-router-dom";
import img from '../images/button-img.png'

class SearchForm extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.inputValue && prevProps.inputValue !== this.props.inputValue) {
            this.url()
            this.props.fetchMovies()
        }
        if (prevProps.inputValue === this.props.inputValue && this.props.movies.length === 0){
            this.props.removeInputValue()
        }
    }
    url = () => {
        window.history.pushState(null, null, `/search?q=${this.props.inputValue}`)
    }
    getValue = () => {
        const input = document.getElementById('form-input')
        if(input.value){
            return this.props.sendValue(input.value)
        } else {
            input.setAttribute('placeholder', 'Please make a choice')
        }
    }
    onSubmit = event => {
        if (event.key !== 'Enter'){
            return
        }
        this.getValue()
    }

    render() {
        return (
            <form className='search'
                  onSubmit={e=> e.preventDefault()}
            >
                <div className="form-group row">
                    <div className='col-10 px-1'>
                        <input
                            className='form-control search__input'
                            id='form-input'
                            type="text"
                            onSubmit={e=> e.preventDefault()}
                            onKeyPress={this.onSubmit}
                        />
                    </div>
                    <Link
                        className='btn btn-outline-danger col-2 btn--search'
                        onClick={() => this.getValue()}
                        to='/'
                    >
                        <img className='search__img' src={img}  alt="search"/>
                    </Link>
                </div>
            </form>
        );
    }
}
function mapStateToProps(state){
    return{
        inputValue: state.youtube.inputValue,
        movies: state.youtube.movies,
        searchingResult: state.youtube.searchingResult
    }
}
function mapDispatchToProps(dispatch){
    return{
        fetchMovies:() => dispatch(fetchMovies()),
        sendValue: (value) => dispatch(sendValue(value)),
        removeInputValue: () => dispatch(removeInputValue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(SearchForm);