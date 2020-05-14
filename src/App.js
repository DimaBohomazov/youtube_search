import React from 'react';
import Movie from './pages/Movie'
import Home from './pages/Home'
import SearchForm from "./components/SearchForm";
import {Switch, Route, withRouter} from 'react-router-dom'
import ErrorBoundary from "./components/hoc/ErrorBoundary";

function App() {
  return (
    <div className='container'>
        <SearchForm />

          <Switch>
            <Route path='/movie/:id' component={Movie} exact/>
              <ErrorBoundary>
                <Route path='/' component={Home} />
              </ErrorBoundary>
          </Switch>
    </div>
  );
}

export default withRouter(App);
