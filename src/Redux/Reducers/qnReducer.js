import {
    GET_QNS,
    GET_QN,
    POST_QN,
    DELETE_QN,
    UPDATE_QN,
    VOTE_QN,
    QNS_LOADING,
  } from "../Types/qnTypes";

  
  const initialState = {
    qns: [],
    qn: {},
    statusMsgs:[],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_QNS: {
        return {
          ...state,
          qns: action.payload,
          loading: false
        };
      }
      case GET_QN:
        if(!action.payload.message){

          return { ...state, qn: action.payload, loading: false };
        }
        else{
          return {
            ...state,
            statusMsgs: [...state.statusMsgs, action.payload],
            loading: false 
          }
        }
      case DELETE_QN:
        return {
          ...state,
          loading: false,
          qns: state.qns.filter(qn => qn._id !== action.payload)
        };
  
      case POST_QN:
        let {message} =action.payload
        if(message){
          return {
            ...state,
            statusMsgs: [...state.statusMsgs, action.payload],
            loading: false
          }
        }
        else{

          return {
            ...state,
            qns: [...state.qns, action.payload],
            qn: action.payload,
            loading: false
          };
        }

        case VOTE_QN:
            return {
                ...state,
                qn: action.payload,
                loading: false
              };
  
      case UPDATE_QN:
        return {
          ...state,
          qn: action.payload,
          loading: false
        };
      case QNS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }