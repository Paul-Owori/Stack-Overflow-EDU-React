import React, { Component } from "react";

// Components
import InputTextArea from './../components/InputTextArea'
import VotingBtn from './../components/VotingBtn'
import AnswerCard from './../components/AnswerCard'

// Redux
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getQn, voteQn, toggleAnswered} from './../Redux/Actions/qnActions'
import {getUser} from './../Redux/Actions/userActions'
import {getAnswers, postAnswer, togglePreferred} from './../Redux/Actions/answerActions'



// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/view-one-qn.css";
import "./../stylesheets/themes/view-qns.css";


class ViewOneQn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      answer:"",
      qnAsker: "",
      qn:{}
    }
  }

  componentDidMount=()=>{
    const { match: { params:{qnID} } } = this.props;
    console.log("QN ID: ", qnID)
    this.props.getQn(qnID);
  }

  componentDidUpdate=()=>{
    let propsQn = this.props.questions.qn;
    let stateQn = this.state.qn;
    let propsQnAsker = this.props.user.user;
    let stateQnAsker = this.state.qnAsker
    let stateAnswers =  this.state.answers
    let propsAnswers =  this.props.answer.answers


    // Get the token 
    this.retrieveToken()
    .then(token=>{
      // Add the qn to state and fetch details of who asked it and answers
      if(propsQn && stateQn !== propsQn){
        this.props.getUser({userID:propsQn.user_id, token})
        this.props.getAnswers(propsQn._id)
        this.setState({qn:propsQn})
      }

      // Add the question asker details to state 
      if(propsQnAsker && stateQnAsker!== propsQnAsker){
        this.setState({qnAsker:propsQnAsker})
      }

      // Check for relevant answers
      if(propsAnswers&& stateAnswers!==propsAnswers){
        this.setState({answers:propsAnswers})
      }

    })
    
    
    }

    
    // Function for retrieving token
    retrieveToken = async ()=>{

      let token;

      const tokenCheck = ()=>{

        if(this.props.user.token){
         
        return token = this.props.user.token
      }
      else if(sessionStorage.getItem('token')!==null){
        return token= JSON.parse(sessionStorage.getItem('token'))
      }
      console.error("No token was found")
      return("No token found")
    }

      await tokenCheck();

    return token

    }

  submitAnswer = (text) => {
    this.setState({ answer: text })
    let question_id = this.state.qn._id;
    let answer = {
      question_id,
      text
    }
    this.retrieveToken()
    .then(token=>{
      this.props.postAnswer({token , answer })
    })
    
  }


  voteQn = (upOrDown) => {

    alert("Voted " + upOrDown)

    this.retrieveToken().then(token=>{

      this.props.voteQn({token, qn:"123"})

    })
    
  }

  voteAns = (upOrDown) => {
    alert("Voted " + upOrDown)
    this.retrieveToken().then(token=>{

      this.props.voteAns({token, qn:"123"})

    })
    
  }

  flagPreferredAnswer=(ansID)=>{
    alert("Flagged " + ansID +" as preferred")
  }
  render() {
    return (
      
      <div className="page-container ">

        <div className="content-container">

        <h1 className="color-orange align-left add-padding-left">
              {this.state.qnAsker.first_name ? this.state.qnAsker.first_name : <span>A User</span>} asked:
          </h1>
          {this.state.qnAsker.first_name ?"":<p className="small-text color-orange add-padding-left">(Login to find out who asked this question)</p>}
          <div id="questionWrapper" className="user-question-wrapper">

            
            {/* Voting button */}
            <VotingBtn onVote={this.voteQn} className="voting-button"/>
            <div className="question-details">

            <h2 id="questionTitle">{this.state.qn.title?this.state.qn.title:"Why doesnt my code run?"}</h2>
            

            <p id="questionText">{this.state.qn.text?this.state.qn.text:"Could someone help me with this javascript code? I've tried to Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, magni tenetur eveniet rerum quaerat recusandae id aut libero nam asperiores ex iusto labore temporibus corrupti inventore impedit, praesentium voluptas at."}
            </p>

            <div id="btnContainer">
            <a href="#answerBox"><button className="answer-button">Answer this Question</button></a>
              
            </div>
            </div>
          </div>
          <div id="answersWrapper">
            <h2 id="answersTitle">Answers:</h2>
            {!this.state.answers?(<h4 className="align-left color-orange">No answers yet. Be the first to answer.</h4>):""}
            {this.state.answers && this.state.answers.length?
            this.state.answers.map(({question_id, preferred, comments,status, text, user_id, _id})=>{
              return <AnswerCard
              key={_id}
              answerText={text}
              voteAns={this.voteAns}
              preferred={preferred}
              ansID={_id}
              flagPreferred={this.flagPreferredAnswer}
              status={status}
              comments={comments}
              />

            })
              :""}

            

          </div>






          <div id="answerBox"> 
            <InputTextArea yellowBtnTitle="Answer" grayBtnTitle="Reset" placeHolder="Your answer..." onSubmit={this.submitAnswer} />
          </div>
        </div>
      </div>
    );
  }
}

//export default ViewOneQn;

ViewOneQn.propTypes = {
  getQn: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getAnswers: PropTypes.func.isRequired,
  postAnswer: PropTypes.func.isRequired,
  voteQn:PropTypes.func.isRequired,
  toggleAnswered:PropTypes.func.isRequired,
  togglePreferred:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  questions: state.qn,
  user: state.user,
  answer:state.answer
});
export default connect(
  mapStateToProps,
  { getQn, getUser, getAnswers, postAnswer, voteQn, togglePreferred, toggleAnswered}
)(ViewOneQn);
