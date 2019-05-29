import * as firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBganQKV7-jWfvlUnDPi7N7SMXxRe89oHw",
    authDomain: "react-830f4.firebaseapp.com",
    databaseURL: "https://react-830f4.firebaseio.com",
    projectId: "react-830f4",
    storageBucket: "react-830f4.appspot.com",
    messagingSenderId: "789192149912",
    appId: "1:789192149912:web:cf2dc811d055358c"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export function createUser () {
    return db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  export function getUser() {
      return db.collection('users').doc('GoH7erzdjkKsbZMhTzet').get()
  }

  
