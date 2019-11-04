import React, { Component } from "react";

// Components
import InputTextArea from './../components/InputTextArea'


// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/view-one-qn.css";

/* This component should be fed props of: 
onSubmit, 
yellowBtnTitle, 
grayBtnTitle, 
placeHolder, 
rows,
cols
*/
class ViewOneQn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      askerFirstName: "",
      askerLastName: ""
    }
  }

  submitAnswer = (input) => {
    this.setState({ answer: input })
    console.log("Received input", input)
  }
  render() {
    return (
      <div className="page-container ">

        <div className="content-container">


          <div id="questionWrapper">

            <h1 id="userAsked" className="color-orange">
              {this.state.askerFirstName ? this.state.askerFirstName : "User"} asked
          </h1>
            <h2 id="questionTitle">Why doesnt my code run?</h2>

            <p id="questionText">Could someone help me with this javascript code?
                I've tried to Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, magni tenetur eveniet
                rerum quaerat recusandae id aut libero nam asperiores ex iusto labore temporibus corrupti inventore
                impedit, praesentium voluptas at.
            </p>

            <div id="btnContainer">

              <input type="checkbox" name="answerQnCheckbox" id="answerQnCheckbox" />
              <label id="answerQnBtn" htmlFor="answerQnCheckbox">Answer this Qn</label>
            </div>
          </div>
          <div id="answersWrapper">
            <h2 id="answersTitle">Answers:</h2>

          </div>







          <InputTextArea yellowBtnTitle="Answer" grayBtnTitle="Reset" placeHolder="Your answer..." onSubmit={this.submitAnswer} />
        </div>
      </div>
    );
  }
}

export default ViewOneQn;
