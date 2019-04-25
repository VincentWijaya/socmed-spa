import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import store from './store'

import Home from './containers/Home';
import NotFound from './containers/404';
import Users from './containers/Users';
import Album from './containers/Album.js';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/users" component={ Users } />
              <Route path="/album/:userId" component={ Album } />
              <Route component={ NotFound } />
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
