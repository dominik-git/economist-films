// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app/app';
import VideoPlayerContainer from './components/video-player-container/video-player-container';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/:selectedEpisodeId" component={App} />
    <Route path="/watch/:id" component={VideoPlayerContainer} />
  </Router>
), document.getElementById('root'));
