import React, { useRef, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;