 import * as firebase from 'firebase'
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBgYtMvb_vnnDjQxPVlT25sUpWErnbhpBs",
    authDomain: "react-redux-firebase-crub.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-crub.firebaseio.com",
    projectId: "react-redux-firebase-crub",
    storageBucket: "react-redux-firebase-crub.appspot.com",
    messagingSenderId: "463547327390",
    appId: "1:463547327390:web:61e64458a72039bbe56c8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database().ref('/posts')
