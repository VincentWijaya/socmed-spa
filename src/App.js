import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from "./containers/Home";
import NotFound from "./containers/404";
import Users from "./containers/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/users" component={ Users } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
