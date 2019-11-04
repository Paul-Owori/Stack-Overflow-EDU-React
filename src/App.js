import React from 'react';
import './App.css';

// Import Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import redux
import { Provider } from "react-redux"; 
import store from './store'

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
    <Provider store={store}>
      <div className="App">
        {/* <NavBar /> */}
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
    </Provider>
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