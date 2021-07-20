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

//TODO (setup firebase)
firebase.initializeApp({
    apiKey: "AIzaSyAbp3x03K7ip58JQxkluavjCPlxxrDnpXM",
    authDomain: "project-maria-e0bff.firebaseapp.com",
    databaseURL: "https://project-maria-e0bff-default-rtdb.firebaseio.com",
    projectId: "project-maria-e0bff",
    storageBucket: "project-maria-e0bff.appspot.com",
    messagingSenderId: "1017787663623",
    appId: "1:1017787663623:web:9610b232cd53de5e3b31a2",
    measurementId: "G-HBD060VDFK"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
//const analytics = firebase.analytics();


function App() {
    const [user] = useAuthState(auth);
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
             <Switch>
                <Route path="/register">
                    <RegisterPage />
                </Route>
             </Switch>
            </div>
          </div>
        </Router>
  );
}

//HomePage
function RegisterPage() {

    const [user] = useAuthState(auth);
    return <div>
                <div id="Box">
                    <div id="Title">
                        <h1>Sign in to get started!</h1>
                    </div>

                    <div className="form-group">
                        <section1>
                              {user ? <SignOut /> : <SignIn />}
                        </section1>
                        <p className="forgot-password text-right">
                            Need <a href="#">help?</a>
                        </p>
                    </div>  
                </div>
           </div>                                  
}


function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        //<button type="submit" class="btn btn-block btn-lg btn-dark">Send it!</button>
        <button onClick={signInWithGoogle} type="submit" class="btn btn-block btn-lg btn-dark">Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()} type="submit" class="btn btn-block btn-lg btn-dark">Sign Out</button>
    )
}

export default App;