import {
    GET_QNS,
    GET_QN,
    POST_QN,
    DELETE_QN,
    UPDATE_QN,
    VOTE_QN,
    QNS_LOADING,
  } from "../Types/qnTypes";


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
    console.log("Token was received ", token)
    console.log("Question was asked", qn)

    let bearer_token = `Bearer ${token.token}`
    console.log("Bearer token", bearer_token)
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
      })
}