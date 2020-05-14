import React, {Component} from 'react';
import {connect} from "react-redux";


class ErrorBoundary extends Component {
    render() {
        if (this.props.error) {
            return (
                <div className='error'>
                    <h1 className='error__message'>Sorry, we have an error...</h1>
                    <h2 className='error__message'>Use the search and check your internet connection.</h2>

                </div>
            )
        } else if(!this.props.searchingResult){
            return (
                <div className='error'>
                    <h1 className='error__message'>Sorry, nothing found...</h1>
                    <h2 className='error__message'>try again...</h2>
                </div>

            )
        }
        return this.props.children;
    }
}
function mapStateToProps(state){
    return{
        error: state.youtube.error,
        searchingResult: state.youtube.searchingResult,
        inputValue: state.youtube.inputValue
    }
}
export default connect(mapStateToProps)(ErrorBoundary);