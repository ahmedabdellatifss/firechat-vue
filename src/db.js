import firebase from "firebase/app";
import "firebase/database";

const config = {
    // API keys
    apiKey: "AIzaSyDLGT6mXvs5h0cfETzNw6fGKGl_PSsQ2EQ",
    authDomain: "firevuechat-4cb56.firebaseapp.com",
    projectId: "firevuechat-4cb56",
    storageBucket: "firevuechat-4cb56.appspot.com",
    messagingSenderId: "891935921670",
    appId: "1:891935921670:web:466a42e0cccac2aacd9587"
}

const db = firebase.initializeApp(config);
export default db;
