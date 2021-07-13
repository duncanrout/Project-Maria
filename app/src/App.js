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

//Firebase Package
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    //hidden config
})

const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();

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