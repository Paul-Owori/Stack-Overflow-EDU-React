import React from 'react';
import "./../stylesheets/modules/voting-btn.css";


const VotingBtn = props =>{
    const vote = (upOrDown)=>{
        if(props.onVote){

            props.onVote(upOrDown)
        }
        else{
            console.error(`Attempted to ${upOrDown}vote, but VotingBtn component has not received onVote prop. onVote prop should be a function` )
        }
    }

    return(
        
             <span className={"votes-container " + (props.className ? props.className:" ")}>
                <span className={"voting-btn " + (props.usersVote && props.usersVote==="up"?"color-orange":"")} onClick={vote.bind(this, "up")}><i className="fas fa-caret-up"></i></span>
                <span className="upvote-count ">{props.upVotes && props.downVotes? props.upVotes - props.downVotes:0}</span>
                <span className={"voting-btn " + (props.usersVote && props.usersVote==="down"?"color-orange":"")} onClick={vote.bind(this, "down")}><i className="fas fa-caret-down"></i></span>
            </span>
        
        )
}

export default VotingBtn