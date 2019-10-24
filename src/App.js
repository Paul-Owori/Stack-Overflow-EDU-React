import React from 'react';
import './App.css';

// Redux and router
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux"; 

// Modules
import NavBar from './components/NavBar'

// Views
import HomePage from './views/HomePage'
import About from './views/About'
import AskQn from './views/AskQn'
import SignUp from './views/SignUp'
import ViewOneQn from './views/ViewOneQn'
import ViewQns from './views/ViewQns'
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar path="/" component={NavBar} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ask" component={AskQn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/viewqns" component={ViewQns} />
        <Route exact path="/view/:qnID" component={ViewOneQn} />




        {/* <Route exact path="/:anything" component={NotFound} /> */}
      </Router>
      
    </div>
  );
}

export default App;

/**  
 *  Geo-firestore
 * Functions
 * Firestore
 * Verifying tokens
 * Joi
 * Firebase CLI
 * 
 * Firebase functions / firestore -> sockets chat
 * */