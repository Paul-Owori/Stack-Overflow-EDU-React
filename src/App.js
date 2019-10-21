import React from 'react';
import './App.css';

// Redux and router
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux"; 

// Modules
import NavBar from './components/NavBar'

// Views
import HomePage from './views/HomePage'
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar path="/" component={NavBar} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/*" component={NotFound} />
      </Router>
      
    </div>
  );
}

export default App;
