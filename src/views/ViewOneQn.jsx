import React, { Component } from "react";

// Components
import InputTextArea from './../components/InputTextArea'
import VotingBtn from './../components/VotingBtn'
import AnswerCard from './../components/AnswerCard'


// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/view-one-qn.css";
import "./../stylesheets/themes/view-qns.css";


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
      answers: "",
      askerFirstName: "",
      askerLastName: ""
    }
  }

  submitAnswer = (input) => {
    this.setState({ answer: input })
    console.log("Received input", input)
  }

  voteQn = (upOrDown) => {
    alert("Voted " + upOrDown)
    
  }

  voteAns = (upOrDown) => {
    alert("Voted " + upOrDown)
    
  }

  flagPreferredAnswer=(ansID)=>{
    alert("Flagged " + ansID +" as preferred")
  }
  render() {
    return (
      <div className="page-container ">

        <div className="content-container">

        <h1 className="color-orange align-left add-padding-left">
              {this.state.askerFirstName ? this.state.askerFirstName : "User"} asked
          </h1>
          <div id="questionWrapper" className="user-question-wrapper">

            
            {/* Voting button */}
            <VotingBtn onVote={this.voteQn} className="voting-button"/>
            <div className="question-details">

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
          </div>
          <div id="answersWrapper">
            <h2 id="answersTitle">Answers:</h2>
            {!this.state.answers?(<h4 className="align-left color-orange">No answers yet. Be the first to answer.</h4>):""}
            {/* Map answers here */}

            <AnswerCard
            answerText="Test Text"
            voteAns={this.voteAns}
            preferred={true}
            ansID={123}
            flagPreferred={this.flagPreferredAnswer}
            />

          </div>







          <InputTextArea yellowBtnTitle="Answer" grayBtnTitle="Reset" placeHolder="Your answer..." onSubmit={this.submitAnswer} />
        </div>
      </div>
    );
  }
}

export default ViewOneQn;
