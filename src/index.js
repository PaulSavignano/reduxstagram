import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import './index.css';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ PhotoGrid } />
      <Route path="view/:postId" component={ Single } />
    </Route>
  </Router>,
  document.getElementById('root')
);
