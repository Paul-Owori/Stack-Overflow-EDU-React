import React, { Component } from "react";

// Import Redux
import { connect } from "react-redux";
import PropTypes from 'prop-types';

// Import Redux actions 
import { addUser } from './../Redux/Actions/userActions'

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
      password: ""
    }
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
      email: this.state.email,
      password: this.state.password
    }

    this.props.addUser(user)
  }



  render() {
    return <div className="page-container">
      <div className="card-container">
        {/* Login Container */}
        <div id="logInContainer">
          <Card >

            <h2 className="center-this">Login Now</h2>
            <form action="#" id="logInForm">
              <input type="email" id="loginEmail" placeholder="Your email address" />
              <input type="password" id="loginPassword" placeholder="Your password" />
              <button type="button" className="submit-button" id="loginBtn">Submit</button>
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


              <button type="button" id="signUpBtn" className="submit-button">Submit</button>
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
  addUser: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { addUser }
)(SignUp);
