// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/app/app';
import HomeContainer from './components/home-container/home-container';
import VideoPlayer from './components/video-player/video-player';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/watch" component={VideoPlayer} />
  </Router>
), document.getElementById('root'));
