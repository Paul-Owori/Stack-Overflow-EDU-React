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

export const addUser = user =>{
    // return (dispatch, getState, {getFirebase, getFirestore})=>{
    //     // Send data to the firestore
    //     const firestore = getFirestore();
    //     firestore.collection("users").add(user)
    //     .then(result=>{
    //         console.log("The result from adding a user to firestore", result)
    //         dispatch({action:ADD_USER, payload:result})
    //     })
    //     .catch(err=>{
    //         const message =`There was an error adding user: ${user} to the firestore: `;
    //         console.error(message, err)
    //         dispatch({action:CREATE_USER_ERROR, payload:err})
    //     })


    // }
    console.log("Yeahhhh")

}


export const usersLoading = () =>{
    return {type:USERS_LOADING}
    
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