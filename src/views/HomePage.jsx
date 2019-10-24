import React, { Component } from "react";
import LinkCard from '../components/LinkCard'

// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/home-page.css";

class HomePage extends Component {
  state = {};
  render() {
    return <div className="page-container">HomePage
    <div className="card-container">
   <LinkCard linkTo='/ask'> <h2>Ask Questions.</h2>
                <p >Let someone help you solve your problem.</p> </LinkCard>
   <LinkCard linkTo="/viewqns">
   <h2>Answer Questions.</h2>
                <p >Help fellow users solve their problems</p>
    </LinkCard>
   <LinkCard linkTo="/signup"> 
   <h2>Create your account now!</h2>
                <p >Click here to start contributing now.</p>
   </LinkCard>
    </div>
    
    </div>;
  }
}

export default HomePage;
