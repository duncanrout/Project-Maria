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
                <Route path="/registerc">
                    <RegisterPage />
                </Route>
             </Switch>
             <Switch>
                <Route path="/register">
                    <RegisterCompany />
                </Route>
             </Switch>
            </div>
          </div>
        </Router>
  );
}

/* //if user is logged in 
function requireAuth(nextState, replace, next) {
  if (!authenticated) {
    replace({
      pathname: "/login",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}
*/


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

function CompanyAbout(props) {
    const { text, uid, address1, city, description, domain, email, employeeCount, foundedYear, phone1, phone2, postal } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            
            <p>{text}</p>
            <p>{address1}</p>
            <p>{phone1}</p>
        </div>
    )
}

/*
function CompanyAbout(props) {
    const companiesRef = firestore.collection('companies').doc('on32Rde5G3ZYwWP8sWVP');
    const doc = await companiesRef.get();
    console.log('Document data:', doc.data());

    return (
        <div className={`message ${messageClass}`}>
            
            <p>{text}</p>
            <p>{address1}</p>
        </div>
    )
}
*/

//TODO (Make it so one must be signed in to view form)
function RegisterCompany() {


    const companiesRef = firestore.collection('companies');
    const query = companiesRef.orderBy('createdAt').limit(25);

    const [companies] = useCollectionData(query, { idField: 'id' });

    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [companyFoundedYear, setCompanyFoundedYear] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyAddress2, setCompanyAddress2] = useState('');
    const [companyCity, setCompanyCity] = useState('');
    const [companyPostal, setCompanyPostal] = useState('');
    const [companyPhone1, setCompanyPhone1] = useState('');
    const [companyPhone2, setCompanyPhone2] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyDomain, setCompanyDomain] = useState('');
    const [companyEmployeeCount, setCompanyEmployeeCount] = useState('');
   
    const sendData = async (e) => {
        //prevent refresh
        e.preventDefault()

        const { uid } = auth.currentUser;

        //creates new document to firestore database
        await companiesRef.add({
            text: companyName,
            foundedYear: companyFoundedYear,
            address1: companyAddress1,
            address2: companyAddress2,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            description: companyDescription,
            city: companyCity,
            postal: companyPostal,
            phone1: companyPhone1,
            phone2: companyPhone2,
            email: companyEmail,
            domain: companyDomain,
            employeeCount: companyEmployeeCount,
            uid
        })

        setCompanyName('');
        setCompanyAddress1('');
        setCompanyAddress2('');
        setCompanyDescription('');
        setCompanyCity('');
        setCompanyPostal('');
        setCompanyPhone1('');
        setCompanyPhone2('');
        setCompanyEmail('');
        setCompanyDomain('');
        setCompanyEmployeeCount('');
    }

    return (
    <>
        <div>
            {companies && companies.map(msg => <CompanyAbout key={msg.id} message={msg} />)}
        </div> 

        <div id="Box">
            <div id="Title">
                <h1>Business Application Form</h1>
            </div>

            <div className="form-group">
                <label>What is the name of your business?</label>
                <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" className="form-control" placeholder="ex: A Business Name" />
            </div>

            <div className="form-group">
                <label>When was the business founded?</label>
                <input value={companyFoundedYear} onChange={(e) => setCompanyFoundedYear(e.target.value)} type="text" className="form-control" placeholder="ex: 2000" />
            </div>

            <div className="form-group">
                <label>Tell us about your business.</label>
                <input value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} type="text" className="form-control" placeholder="ex: We are a business that does certain things." />
            </div>

            <div className="form-group">
                <label>What is your businesses' address?</label>
                <input value={companyAddress1} onChange={(e) => setCompanyAddress1(e.target.value)} type="text" className="form-control" placeholder="ex: Av. abcdefg 1234" />
            </div>

            <div className="form-group">
                <label>Does your business have a second address? (OPTIONAL)</label>
                <input value={companyAddress2} onChange={(e) => setCompanyAddress2(e.target.value)} type="text" className="form-control" placeholder="ex: Av. abcdefg 5678" />
            </div>

            <div className="form-group">
                <label>What is your business's City and Province?</label>
                <input value={companyCity} onChange={(e) => setCompanyCity(e.target.value)} type="text" className="form-control" placeholder="ex: Sao Paulo, Sao Paulo" />
            </div>

            <div className="form-group">
                <label>What is your business's Post Code?</label>
                <input value={companyPostal} onChange={(e) => setCompanyPostal(e.target.value)} type="text" className="form-control" placeholder="ex: 12345-678" />
            </div>

            <div className="form-group">
                <label>What is a good phone number to contact you at?</label>
                <input value={companyPhone1} onChange={(e) => setCompanyPhone1(e.target.value)} type="text" className="form-control" placeholder="ex: 12 3456-7891" />
            </div>

            <div className="form-group">
                <label>Does your business have a second phone number? (OPTIONAL) </label>
                <input value={companyPhone2} onChange={(e) => setCompanyPhone2(e.target.value)} type="text" className="form-control" placeholder="ex: 12 3456-7891" />
            </div>

            <div className="form-group">
                <label>Does your business have an email?</label>
                <input value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} type="email" className="form-control" placeholder="ex: johnDoe@1234.com" />
            </div>

            <div className="form-group">
                <label>What is your business's website? (OPTIONAL)</label>
                <input value={companyDomain} onChange={(e) => setCompanyDomain(e.target.value)} type="text" className="form-control" placeholder="ex: http://www.mywebsite.com.br" />
            </div>

            <div className="form-group">
                <label>How many employees does your bussiness have? (OPTIONAL)</label>
                <input value={companyEmployeeCount} onChange={(e) => setCompanyEmployeeCount(e.target.value)} type="text" className="form-control" placeholder="ex: 12345" />
            </div>

            <form onSubmit={sendData}>
                        <button type="submit" class="btn btn-block btn-lg btn-dark"> Submit </button>
                        <p className="forgot-password text-right">
                        Need <a href="#">help?</a>
                        </p>
            </form>
        </div>
    </>
    )
}

export default App;