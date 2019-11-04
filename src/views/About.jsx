import React, { Component } from "react";
// 
import BlackCard from './../components/BlackCard'
// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="page-container center-content">
        <BlackCard className="max-width-50 about-card">
          <h1 className="center-this color-orange">About</h1>
          <div>
            This is a learning project built for the OutBox EDU Core Program.
            <br />
            <br />
            Any user of this web app is able to:
            <ul>
              <li>Create an account.</li>
              <li>Login with the newly created account.</li>
              <li>Ask a question.</li>
              <li>Have that question answered by other users.</li>
              <li>Select and flag a single answer to their question as the correct / preferred answer</li>
              <li>Answer other users questions.</li>
              <li>Comment on answers to any question</li>
              <li>Upvote and Downvote other users' questions.</li>
              <li>Upvote and Downvote other users' answers to any question.</li>

            </ul>

            This projects frontend was built using the <span className="make-bold">MERN </span> stack (MongoDB, Express.js React.js, Node.js)
            <br />
            <br />
            This project was built by <span className="make-bold">Paul Robert Owori</span>
            <section className="social-icons">

              <span className="icon">
                <a href="https://www.linkedin.com/in/paul-owori-957753171/"><i className="fab fa-linkedin"></i></a>
              </span>
              <span className="icon">
                <a href="https://github.com/Paul-Owori"><i className="fab fa-github"></i></a>
              </span>
            </section>
          </div>
        </BlackCard>
      </div >);
  }
}

export default About;
