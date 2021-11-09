import React from 'react'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlfgfK8baIzj79oWPCA7wWugJKf5L7WAk",
    authDomain: "clone-139db.firebaseapp.com",
    projectId: "clone-139db",
    storageBucket: "clone-139db.appspot.com",
    messagingSenderId: "1006374870370",
    appId: "1:1006374870370:web:d608d030081410ad6ca03b",
    measurementId: "G-GD16ER62JL"
});


const auth = firebase.auth();

export { auth};
