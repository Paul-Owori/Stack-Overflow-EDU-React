import {
    GET_ANSWERS,
    GET_ANSWER,
    POST_ANSWER,
    DELETE_ANSWER,
    UPDATE_ANSWER,
    VOTE_ANSWER,
    ANSWERS_LOADING,
  } from "../Types/answerTypes";

  
  const initialState = {
    answers: [],
    answer: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ANSWERS: {
        return {
          ...state,
          answers: action.payload,
          loading: false
        };
      }
      case GET_ANSWER:
        return { ...state, answer: action.payload, loading: false };
      case DELETE_ANSWER:
        return {
          ...state,
          loading: false,
          answers: state.answers.filter(answer => answer._id !== action.payload)
        };
  
      case POST_ANSWER:
        return {
          ...state,
          answers: [...state.answers, action.payload],
          answer: action.payload,
          loading: false
        };

        case VOTE_ANSWER:
            return {
                ...state,
                answer: action.payload,
                loading: false
              };
  
      case UPDATE_ANSWER:
        return {
          ...state,
          answer: action.payload,
          loading: false
        };
      case ANSWERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }