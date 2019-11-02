import React, { Component } from "react";
// Components
import InputTextArea from './../components/InputTextArea'
// Stylesheets
import "./../stylesheets/base.css";
// import "./../stylesheets/themes/ask-qn.css";

class AskQn extends Component {
  state = {
    qn: ""
  };

  collectQn = (input) => {
    this.setState({ qn: input });
  }

  render() {
    return <div className="page-container" id="contentContainer">
      <h1 className="color-orange center-this">Ask a question</h1>
      <InputTextArea placeHolder="Ask a Question..." yelloBtnTitle="Ask" grayBtnTitle="Reset" onSubmit={this.collectQn} />
    </div>;
  }
}

export default AskQn;
