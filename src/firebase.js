import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKBb33z_-UeAINWjNB0f5v-9YjBVJxOC8",
    authDomain: "proyecto-react-c222c.firebaseapp.com",
    projectId: "proyecto-react-c222c",
    storageBucket: "proyecto-react-c222c.appspot.com",
    messagingSenderId: "757210614371",
    appId: "1:757210614371:web:8c44e157e6f53546460656"
  };

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);