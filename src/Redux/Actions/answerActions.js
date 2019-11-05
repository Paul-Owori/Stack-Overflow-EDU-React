import {
    GET_ANSWERS,
    GET_ANSWER,
    POST_ANSWER,
    DELETE_ANSWER,
    UPDATE_ANSWER,
    VOTE_ANSWER,
    ANSWERS_LOADING,
  } from "../Types/answerTypes";


  export const answersLoading = () =>{
    return {type:ANSWERS_LOADING}
    
}

  export const postAnswer = ({answer, token})=>dispatch=>{
      dispatch(answersLoading);

      let bearer_token = `Bearer ${token.token}`
      console.log("Bearer token", bearer_token)

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
