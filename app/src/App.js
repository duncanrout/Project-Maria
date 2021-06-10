import React, { useRef, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//pages
import { Home } from './pages/home.js';
import { About } from './pages/about.js';
import { Form } from './pages/form.js';

//components
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
          <Switch>
            <Route path="/form" component={Form} />
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;