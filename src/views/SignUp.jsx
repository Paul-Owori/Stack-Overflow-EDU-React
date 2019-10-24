import React, { Component } from "react";

// Components
import Card from './../components/Card'

// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/sign-up.css";

class SignUp extends Component {
  state = {};
  render() {
    return <div className="page-container">
      <div className="card-container">
      {/* Login Container */}
      <div id="logInContainer">
      <Card >
      
                <h2 class="center-this">Login Now</h2>
                <form action="#" id="logInForm">
                    <input type="email" id="loginEmail" placeholder="Your email address"/>
                    <input type="password" id="loginPassword" placeholder="Your password"/>
                    <button type="button" className="submit-button" id="loginBtn">Submit</button>
                </form>
            
      </Card>
      </div>

      {/* Signup Container */}
      <div id="signUpContainer">
      <Card >
      
      <h2>Signup Now</h2>
                <form action="#" id="signUpForm">
                    
                    <input type="text" id="firstName" placeholder="Your first name"/>
                    <input type="text" id="lastName" placeholder="Your last name"/>
                    <input type="email" id="email" placeholder="Your email address"/>
                    <input type="password" id="password1" placeholder="Your password"/>
                    <input type="password" id="password2" placeholder="Confirm password"/>

                    <button type="button" id="signUpBtn" class="submit-button">Submit</button>
                </form>
      </Card>
      </div>
      </div>
    </div>;
  }
}

export default SignUp;
