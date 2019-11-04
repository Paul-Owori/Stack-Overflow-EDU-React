import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    USERS_LOADING,
    SIGNIN_USER,
    CREATE_USER_ERROR,
    LOGOUT_USER
  } from "../Types/userTypes";
  
  const initialState = {
    users: [],
    user: {},
    statusMsgs:[],
    token:"",
    loading: false,
    loggedIn: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        return { ...state, users: action.payload, loading: false };
      case GET_USER:
        return { ...state, user: action.payload, loading: false };
      case LOGOUT_USER:
        return { ...state, user: {}, loading: false, loggedIn: false };
      case DELETE_USER:
        return {
          ...state,
          loading: false,
          users: state.users.filter(user => user._id !== action.payload)
        };
      case ADD_USER:
        let timeStamp = new Date()
        let {message} = action.payload
        let newStatus = {
          timeStamp, message
        }
        return {
          ...state,
          statusMsgs:[...state.statusMsgs, newStatus],
          loading: false
        };
      case SIGNIN_USER:
        return {
          ...state,
          token: action.payload,
          loading: false,
          loggedIn: true
        };
      case UPDATE_USER:
        return {
          ...state,
          user: action.payload,
          users: [
            action.payload,
            ...state.users.filter(user => user._id !== action.payload._id)
          ],
          loading: false
        };
        case CREATE_USER_ERROR:
          return {
          ...state,
          user_error:action.payload
          };
      case USERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }