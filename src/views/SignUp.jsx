import React, { Component } from "react";

// Import Redux
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addUser, loginUser } from './../Redux/Actions/userActions'

// Components
import Card from './../components/Card'

// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/sign-up.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      loginEmail:"",
      loginPassword:""
    }
  }

  componentDidUpdate=()=>{
    console.log(this.props)
  }

  //Change a field in the state when its partner field in the form is edited
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  // Signup a user
  signUpUserHandler = () => {
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.email,
      password: this.state.password
    }

    this.props.addUser(user)
  }

  signinUser =()=>{
    let user ={
      emailAddress:this.state.loginEmail,
      password:this.state.loginPassword
    }

    this.props.loginUser(user)
  }



  render() {
    return <div className="page-container">
      <div className="card-container">
        {/* Login Container */}
        <div id="logInContainer">
          <Card >

            <h2 className="center-this">Login Now</h2>
            <form action="#" id="logInForm">
              <input type="email" id="loginEmail" name="loginEmail" 
              value={this.state.loginEmail}  onChange={this.handleChange} 
              placeholder="Your email address" />
              <input type="password" id="loginPassword" name="loginPassword" 
              value={this.state.loginPassword} onChange={this.handleChange} 
              placeholder="Your password" />
              <button 
              type="button" 
              className="submit-button" 
              id="loginBtn"
              onClick={this.signinUser}
              >Submit</button>
            </form>

          </Card>
        </div>

        {/* Signup Container */}
        <div id="signUpContainer">
          <Card >

            <h2>Signup Now</h2>
            <form action="#" id="signUpForm">

              <input type="text" id="firstName" placeholder="Your first name" name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange} />
              <input type="text" id="lastName" placeholder="Your last name" name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange} />
              <input type="email" id="email" placeholder="Your email address" name="email"
                value={this.state.email}
                onChange={this.handleChange} />
              <input type="password" id="password1" placeholder="Your password" name="password"
                value={this.state.password}
                onChange={this.handleChange} />


              <button type="button" id="signUpBtn"onClick={this.signUpUserHandler} className="submit-button">Submit</button>
            </form>
          </Card>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { addUser, loginUser }
)(SignUp);
