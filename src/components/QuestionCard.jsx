import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// Components
import BlackCard from './../components/BlackCard'

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
        alert(props.qnID ? props.qnID : "No ID")
    }

    const vote = (upOrDown) => {
        alert("Voted! " + upOrDown)
        console.log("Props: ", props)
    }


    return (

        <BlackCard className="question-container">

            <span className="votes-container">
                <span className="voting-btn" onClick={vote.bind(this, "up")}><i class="fas fa-caret-up"></i></span>
                <span className="upvote-count">{props.upVotes - props.downVotes}</span>
                <span className="voting-btn" onClick={vote.bind(this, "down")}><i class="fas fa-caret-down"></i></span>
            </span>

            <div className="question-wrapper">

                <h2 className="question-title">{props.qnTitle ? props.qnTitle : ""}</h2>
                <p class="question-text">
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

        </BlackCard>

    );

}

export default QuestionCard;
