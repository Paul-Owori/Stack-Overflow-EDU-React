import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// Components
import BlackCard from './../components/BlackCard'
import VotingBtn from './../components/VotingBtn'

// Stylesheets
import "./../stylesheets/base.css";
import "./../stylesheets/themes/view-qns.css";
import "./../stylesheets/modules/question-card.css"

const QuestionCard = (props) => {

    // state = {
    //   questions: [

    //     {
    //       _id:""
    //       user_id:"",
    //       title:"",
    //       text: "",
    //       status: {
    //         upvotes: [{
    //           user_id: "",
    //         }],
    //         downvotes: [{
    //           user_id:"",
    //         }],
    //       },
    //       answer_ids: [{_id:""},{_id:""}],
    //     }

    //   ]
    // }
    const goToQn = () => {
        props.history.push(`/view/${props.qnID}`)
    }

    const vote = (upOrDown) => {
        alert("Voted! " + upOrDown)
    }


    return (

        <BlackCard className="question-container">

          

            <div className="question-details-wrapper">

                <h2 className="question-title">{props.qnTitle ? props.qnTitle : ""}</h2>
                <p className="question-text">
                    {props.qnText ? props.qnText : ""}

                </p>


                <div className="qn-button-container">
                    <Link className="see-more-link" to={props.link ? props.link : "#"}>
                        <span className="answer-count"> {props.answers ? props.answers : 0} Answer{props.answers && props.answers > 1 || props.answers === 0 ? "s" : ""} </span>

                        <button type="button" className="see-more-btn" onClick={goToQn}>
                            See More
                        </button>
                    </Link>
                </div>
            </div>
             <VotingBtn onVote={vote}
           upVotes={props.upVotes}
           downVotes={props.downVotes}
           className="vote-question-button"

           />

        </BlackCard>

    );

}

export default QuestionCard;
