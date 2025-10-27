import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB3IIPDFdq9VT92Zsk5TQLLDWEz2z05F1Y",
    authDomain: "practica1-bb5ec.firebaseapp.com",
    projectId: "practica1-bb5ec",
    storageBucket: "practica1-bb5ec.firebasestorage.app",
    messagingSenderId: "732227572803",
    appId: "1:732227572803:web:819f121d526774615f30f6"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()
