//  Import base features of firebase
 import firebase from 'firebase/app'

//  Import firestore
import 'firebase/firestore'

// Import firebase auth
import 'firebase/auth'


 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAf8sznc6H4_1vOXhwbpZwuaA4FtSsBZ8o",
    authDomain: "stack-overflow-react-2.firebaseapp.com",
    databaseURL: "https://stack-overflow-react-2.firebaseio.com",
    projectId: "stack-overflow-react-2",
    storageBucket: "stack-overflow-react-2.appspot.com",
    messagingSenderId: "278197868900",
    appId: "1:278197868900:web:5586b2bda476666c09c271",
    measurementId: "G-13BDPJ3TQD"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   Update firestore setting (recommended)
  firebase.firestore().settings({timestampsInSnapshots:true});
//   Initialize firestore analytics

  export default firebase;
  