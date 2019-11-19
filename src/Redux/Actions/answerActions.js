import {
    GET_ANSWERS,
    GET_ANSWER,
    POST_ANSWER,
    DELETE_ANSWER,
    UPDATE_ANSWER,
    VOTE_ANSWER,
    TOGGLE_PREFERRED,
    ANSWERS_LOADING,
  } from "../Types/answerTypes";

// Import helper functions
import {checkForToken} from './helperFunctions'


  export const answersLoading = () =>{
    return {type:ANSWERS_LOADING}
    
}

  export const postAnswer = ({answer, token})=>dispatch=>{

    checkForToken(token)
    .then(bearer_token=>{
        if(bearer_token){
            dispatch(answersLoading);
            fetch('http://stackoverflow-api.herokuapp.com/answers',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": bearer_token
                    
                },
                body: JSON.stringify(answer)
                })
                .then(res=>res.json())
                .then(res=>{
                    dispatch({ type: POST_ANSWER, payload: res });
                    
                })
                .catch(error => {
                    console.error("Error posting answer: ", error);
                })

        }
        else{
            console.error("No token was found. Please login to continue")
        }
    })
      

     

  }
  

  export const getAnswers = qnID => dispatch =>{
      dispatch(answersLoading);

      fetch(`http://stackoverflow-api.herokuapp.com/answers/byqn/${qnID}`)
      .then(res=>res.json())
      .then(res=>{
          dispatch({ type: GET_ANSWERS, payload: res });
          
      })
      .catch(error => {
          console.error("Error posting answer: ", error);
      })
      
  }

  export const voteAns = ({vote, token}) => dispatch =>{
    checkForToken(token)
    .then(bearer_token=>{
      if(bearer_token){

        //const {answer_id, user_id, upOrDownVote}=vote;
  
        // dispatch(qnsLoading);
        // fetch(`http://stackoverflow-api.herokuapp.com/answers`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "authorization": bearer_token
                
        //     },
        //     body: JSON.stringify(qn)
        // })
        // .then(res=>res.json())
        // .then(res=>{
        //     dispatch({ type: VOTE_ANSWER, payload: res });
            
        // })
        // .catch(error => {
        //     console.error("Error voting answer: ", error);
        //   }
        //   )
    
        alert("Error: Voting feature is not yet implemented")
        
      }
      else{
        console.error("Error: No token found. Please login and try again.")
      }
      
  
    })
  }


  export const togglePreferred = ({toggle, token}) => dispatch =>{
    checkForToken(token)
    .then(bearer_token=>{
      if(bearer_token){

        //const {answer_id, user_id, upOrDownVote}=vote;
  
        // dispatch(qnsLoading);
        // fetch(`http://stackoverflow-api.herokuapp.com/answers`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "authorization": bearer_token
                
        //     },
        //     body: JSON.stringify(qn)
        // })
        // .then(res=>res.json())
        // .then(res=>{
        //     dispatch({ type: VOTE_ANSWER, payload: res });
            
        // })
        // .catch(error => {
        //     console.error("Error voting answer: ", error);
        //   }
        //   )
    
        alert("Error: Toggle preferred feature is not yet implemented")
        
      }
      else{
        console.error("Error: No token found. Please login and try again.")
      }
      
  
    })
  }