import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";


// Components
import QuestionCard from './../components/QuestionCard'

// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/view-qns.css";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getQns} from './../Redux/Actions/qnActions'

class ViewQns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [

        {
          _id: 123,
          user_id: "",
          title: "Why doesnt my code run?",
          text: "Could someone help me with this javascript code? I've tried to Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, magni tenetur eveniet rerum quaerat recusandae id aut libero nam asperiores ex iusto labore temporibus corrupti inventore",
          status: {
            upvotes: [{
              user_id: "",
            }],
            downvotes: [{
              user_id: "",
            }],
          },
          answer_ids: [{ _id: "" }],
        }

      ]
    }
  }

  componentDidMount=()=>{
    this.props.getQns()
    
    
  }

  componentDidUpdate=()=>{
    console.log("Props: ", this.props.questions.qns)
    if(this.state.questions && this.state.questions !== this.props.questions.qns){
      this.setState({questions:this.props.questions.qns})
    }
  }

  
  render() {
    return (
      <div className="page-container">
        <h1 className="color-orange center-this">These are all the questions users have asked.</h1>
        <div className="qn-container">
          
          {this.state.questions.map(({ title, text, _id, status, answer_ids }) =>

            <QuestionCard
              key={_id}
              qnTitle={title}
              qnText={text}
              qnID={_id}
              upVotes={status.upvotes.length}
              downVotes={status.downvotes.length}
              answers={answer_ids.length}
              history={this.props.history}
            />

          )}

        </div>

      </div>
    );
  }
}

// export default ViewQns;

ViewQns.propTypes = {
  getQns: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  
};
const mapStateToProps = state => ({
  questions: state.qn
});
export default connect(
  mapStateToProps,
  { getQns}
)(ViewQns);