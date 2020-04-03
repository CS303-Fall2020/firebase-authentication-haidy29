
import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArqynMyCNyy2JkJuVPhZULT6dv9OKEYr8",
    authDomain: "myapp2-680b1.firebaseapp.com",
    databaseURL: "https://myapp2-680b1.firebaseio.com",
    projectId: "myapp2-680b1",
    storageBucket: "myapp2-680b1.appspot.com",
    messagingSenderId: "339342479739",
    appId: "1:339342479739:web:9efb49b0ea0ccc37782dde",
    measurementId: "G-R6YEWX7FC1"
  };
  const Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase;