import React, { Component } from "react";
// Components
import InputTextArea from './../components/InputTextArea'
// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/ask-qn.css";

class AskQn extends Component {
  state = {
    qnTitle: "",
    qn: ""
  };

  collectQn = (input) => {
    this.setState({ qn: input });
    // Send the input to the server
  }

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return <div className="page-container" id="contentContainer">
      <h1 className="color-orange center-this">Ask a question</h1>
      <input type="text" placeholder="Set a title for your question..." className="question-title-input" onChange={this.handleInput} name="qnTitle" value={this.state.qnTitle} />
      <InputTextArea placeHolder="Ask a Question..." yellowBtnTitle="Ask" grayBtnTitle="Reset" onSubmit={this.collectQn} />
    </div>;
  }
}

export default AskQn;
