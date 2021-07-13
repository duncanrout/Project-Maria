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

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


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