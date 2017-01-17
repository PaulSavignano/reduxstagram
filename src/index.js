import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import './index.css';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ PhotoGrid } />
        <Route path="view/:postId" component={ Single } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
