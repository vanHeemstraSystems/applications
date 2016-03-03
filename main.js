/*
 * main.js
 * 
 */
import React from '../local_libraries/react';
import Router from '../local_libraries/react-router';
import ReactDOM from '../local_libraries/react-dom';
import createBrowserHistory from '../local_libraries/history/lib/createBrowserHistory';
import routes from '../local_routes/creation_ecosystem_route';
import Navbar from '../local_components/Navbar';

console.log('Inside main.js');

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>{routes}</Router>, document.getElementById('app')
);
