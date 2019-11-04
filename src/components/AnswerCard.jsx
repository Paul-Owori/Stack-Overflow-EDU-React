import React from 'react';
// Components
import VotingBtn from './../components/VotingBtn'
// StyleSheets
import './../stylesheets/modules/answer-card.css'

const AnswerCard = props =>{

    const flagPreferredHandler=()=>{
        if(props.flagPreferred){
            props.flagPreferred(props.ansID)
        }
        else{
            console.error("AnswerCard did not receive flagPreferred prop")
        }
    }
return (
    <div className ="answer-wrapper">
        <p>{props.answerText}</p>
        <div className="answer-button-wrapper">

        <span 
        onClick={flagPreferredHandler}
        className={"check-btn " + (props.preferred===true?"green-check":"gray-check")}
        >
            <i className="fas fa-check"></i>
        </span>
        <VotingBtn onVote={props.voteAns} className="voting-button"/>
        </div>
     </div>
)
}

export default AnswerCard