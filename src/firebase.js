import * as firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDK2u6VxP-tYakamGvnn4COWDUM48pm9Os",
    authDomain: "diary-44584.firebaseapp.com",
    databaseURL: "https://diary-44584.firebaseio.com",
    projectId: "diary-44584",
    storageBucket: "diary-44584.appspot.com",
    messagingSenderId: "689741380466"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref('/notes')
