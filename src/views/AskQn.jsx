import React, { Component } from "react";
// Components
import InputTextArea from './../components/InputTextArea'
// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/ask-qn.css";

// Import Redux
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { postQn  } from './../Redux/Actions/qnActions'


class AskQn extends Component {
  state = {
    qnTitle: "",
    qn: ""
  };

  // Get question text input
  collectQn = (input) => {
    this.setState({ qn: input });

    if(this.state.qnTitle && input){
      let qn={
        title:this.state.qnTitle,
        text:input
      }

      let token;
      if(this.props.user.token){
        token = this.props.user.token
        console.log("Token", token)
        this.props.postQn(qn, token)
      }
      else if(sessionStorage.getItem('token')!==null){
        token= JSON.parse(sessionStorage.getItem('token'))
        
          console.log("Token", token)
          if(token){
            this.props.postQn({qn, token})
          }
             
      }
      else{
        console.error("No token found. Action aborted")
      }
     

    }
  }

  // Get question title input
  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return <div className="page-container" id="contentContainer">
      <h1 className="color-orange center-this">Ask a question</h1>
      <input type="text" placeholder="Set a title for your question..." className="question-title-input" onChange={this.handleInput} name="qnTitle" value={this.state.qnTitle} />
      <InputTextArea placeHolder="Elucidate your question..." yellowBtnTitle="Ask" grayBtnTitle="Reset" onSubmit={this.collectQn} />
    </div>;
  }
}

//export default AskQn;

AskQn.propTypes = {
  postQn: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  user:PropTypes.object.isRequired
  
};
const mapStateToProps = state => ({
  questions: state.qn,
  user: state.user
});
export default connect(
  mapStateToProps,
  { postQn}
)(AskQn);
