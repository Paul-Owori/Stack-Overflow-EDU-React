// Import Redux
import { createStore, applyMiddleware, compose } from "redux";

// Import Redux async middeware
import thunk from "redux-thunk";

// Import firebase middleware
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import {reduxFirestore,getFirestore} from 'redux-firestore'

// Import firebase config
import firebaseConfig from './config/firebase-config'

// Import reducers
import rootReducer from "./Redux/Reducers/index";

// Setup firebase middleware
const firebaseMiddleware = {
  getFirebase, getFirestore
}
// Initialize store
const initialState = {};

const middleWare = [thunk.withExtraArgument(firebaseMiddleware)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  // Setup enhancers
  composeEnhancers(applyMiddleware(...middleWare)),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig)
);

export default store;