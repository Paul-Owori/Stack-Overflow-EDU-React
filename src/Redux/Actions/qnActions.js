import {
    GET_QNS,
    GET_QN,
    POST_QN,
    DELETE_QN,
    UPDATE_QN,
    VOTE_QN,
    QNS_LOADING,
    TOGGLE_ANSWERED
  } from "../Types/qnTypes";

// Import helper functions
import {checkForToken} from './helperFunctions'

export const qnsLoading = () =>{
    return {type:QNS_LOADING}
    
}

export const getQns = ()=> dispatch=>{
    dispatch(qnsLoading);
    fetch(`http://stackoverflow-api.herokuapp.com/questions`)
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem("questions", JSON.stringify(res));
        dispatch({ type: GET_QNS, payload: res });
      })
      .catch(error => {
        console.error("Error getting all questions: ", error);
      })
  }

  export const getQn = (qnID)=> dispatch=>{
    dispatch(qnsLoading);
    fetch(`http://stackoverflow-api.herokuapp.com/questions/${qnID}`)
      .then(res => res.json())
      .then(res => {
        if(!res.message){
          sessionStorage.setItem("question", JSON.stringify(res));
        }
        dispatch({ type: GET_QN, payload: res });
      })
      .catch(error => {
        console.error(`Error getting single question with ID ${qnID}: `, error);
      })
  }


export const postQn =({qn, token})=>dispatch=>{

  checkForToken(token)
  .then(bearer_token=>{
    if(bearer_token){

      dispatch(qnsLoading);
    fetch(`http://stackoverflow-api.herokuapp.com/questions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": bearer_token
            
        },
        body: JSON.stringify(qn)
    })
    .then(res=>res.json())
    .then(res=>{
        dispatch({ type: POST_QN, payload: res });
        
    })
    .catch(error => {
        console.error("Error posting question: ", error);
      }
      )

    }
    else{
      console.error("Error: No token found. Please login and try again.")
      return

    }
  })
 
    
    
    
}

export const voteQn = ({vote, token}) => dispatch =>{
  checkForToken(token)
  .then(bearer_token=>{
    if(bearer_token){

      //const {question_id, user_id, upOrDownVote}=vote;

      // dispatch(qnsLoading);
      // fetch(`http://stackoverflow-api.herokuapp.com/questions`, {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //         "authorization": bearer_token
              
      //     },
      //     body: JSON.stringify(qn)
      // })
      // .then(res=>res.json())
      // .then(res=>{
      //     dispatch({ type: POST_QN, payload: res });
          
      // })
      // .catch(error => {
      //     console.error("Error posting question: ", error);
      //   }
      //   )
  
      alert("Error: Voting feature is not yet implemented")
      
    }
    else{
      console.error("Error: No token found. Please login and try again.");
      return
    }
    

  })
}

export const toggleAnswered = ({toggle, token}) => dispatch =>{
  checkForToken(token)
  .then(bearer_token=>{
    if(bearer_token){

      //const {question_id, user_id, upOrDownVote}=vote;

      // dispatch(qnsLoading);
      // fetch(`http://stackoverflow-api.herokuapp.com/questions`, {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json",
      //         "authorization": bearer_token
              
      //     },
      //     body: JSON.stringify(qn)
      // })
      // .then(res=>res.json())
      // .then(res=>{
      //     dispatch({ type: POST_QN, payload: res });
          
      // })
      // .catch(error => {
      //     console.error("Error posting question: ", error);
      //   }
      //   )
  
      alert("Error: Toggle Answered status feature is not yet implemented")
      
    }
    else{
      console.error("Error: No token found. Please login and try again.");
      return
    }
    

  })
}
