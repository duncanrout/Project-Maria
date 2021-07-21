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
             <Switch>
                <Route path="/registerc">
                    <RegisterCompany />
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

//----------------------------------------------------------------------------------------------------

//TODO (Figure out companyAddress1 not popping up -> create all attributes -> create forms all forms -> clean up code -> style -> clean up code)
function CompanyAbout(props) {
    const { text, uid, companyAddress1 } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            
            <p>{text}</p>
            <p>{companyAddress1}</p>
        </div>
    )
}


function RegisterCompany() {
    const companiesRef = firestore.collection('companies');
    const query = companiesRef.orderBy('createdAt').limit(25);

    const [companies] = useCollectionData(query, { idField: 'id' });

    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');

    const sendData = async (e) => {
        //prevent refresh
        e.preventDefault()

        const { uid } = auth.currentUser;

        //creates new document to firestore database
        await companiesRef.add({
            text: companyName,
            address1: companyAddress1,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        })

        setCompanyName('');
        setCompanyAddress1('');
    }

    return (
        <>
            <div>
                {companies && companies.map(msg => <CompanyAbout key={msg.id} message={msg} />)}
            </div>
            <div class="form-row"> 
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                    <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} class="form-control form-control-lg" placeholder="Say hello!" />
                    <input value={companyAddress1} onChange={(e) => setCompanyAddress1(e.target.value)} class="form-control form-control-lg" placeholder="Say hello!" />

                </div>
                <form class="col-12 col-md-3" onSubmit={sendData}>
                    <button type="submit" class="btn btn-block btn-lg btn-dark"> Send </button>
                </form>
            </div>
        </>
    )
}

export default App;