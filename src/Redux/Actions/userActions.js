import {
    GET_USER, 
    GET_USERS, 
    ADD_USER, 
    DELETE_USER, 
    UPDATE_USER, 
    USERS_LOADING, 
    LOGOUT_USER, 
    CREATE_USER_ERROR,
    SIGNIN_USER} from '../Types/userTypes'

// Import helper functions
import {checkForToken} from './helperFunctions'

export const usersLoading = () =>{
  return {type:USERS_LOADING}
  
}

export const addUser = user => dispatch=>{

    dispatch(usersLoading);

    fetch(`http://stackoverflow-api.herokuapp.com/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => {
        sessionStorage.setItem("user", JSON.stringify(res));
        dispatch({ type: ADD_USER, payload: res });
      })
      .catch(error => {
        console.error("Error signing up user: ", error);
      })
  

}



export const loginUser = user => dispatch=>{

  dispatch(usersLoading);

  fetch(`http://stackoverflow-api.herokuapp.com/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(res => {
      sessionStorage.setItem("token", JSON.stringify(res));
      dispatch({ type: SIGNIN_USER, payload: res });
    })
    .catch(error => {
      console.error("Error logging in user: ", error);
    })


}


export const getUser = ({token, userID}) => dispatch=>{

  let bearer_token;

  dispatch(usersLoading);

if(token && token.token){
  bearer_token = `Bearer ${token.token}`

  fetch(`http://stackoverflow-api.herokuapp.com/auth/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": bearer_token
      
  }
  })
    .then(res => res.json())
    .then(res => {
      //sessionStorage.setItem("qnUser", JSON.stringify(res));
      dispatch({ type: GET_USER, payload: res });
    })
    .catch(error => {
      console.error(`Error fetching details for user: ${userID}. Error: `, error);
    })

}
else{
  dispatch(usersLoading);
  return;
}

}



/**
 * //Add a new user
export const addUser = user => dispatch => {
  dispatch(setUsersLoading(), { STUFF: "RANDOM OBJECT" });
  fetch("/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({ type: ADD_USER, payload: response });
    });
};
 */