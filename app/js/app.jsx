import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// routes component
import routes from './routes';

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />
, document.getElementById('app'));