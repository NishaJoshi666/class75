import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBv74mjDfhw27L9mr4tAb_62dbrcofVVxw",
  authDomain: "wily-app-73d07.firebaseapp.com",
  databaseURL: "https://wily-app-73d07.firebaseio.com",
  projectId: "wily-app-73d07",
  storageBucket: "wily-app-73d07.appspot.com",
  messagingSenderId: "643119015728",
  appId: "1:643119015728:web:f73042bd773fbb41798af5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();