import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//Views
import Container from './pages/container';
import Main from './pages/main';
import About from './pages/about';

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Container}>
  		    <IndexRoute component={Main}></IndexRoute>
            <Route path='about' component={About}></Route>
        </Route>
    </Router>
);