import React, { useRef, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Route path="/" component={Home} />
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