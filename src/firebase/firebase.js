import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQ2sfTYHhR3UWDjKHYcoi9BtHpSaO0tm8",
    authDomain: "facebook-messenger-cn.firebaseapp.com",
    databaseURL: "https://facebook-messenger-cn.firebaseio.com",
    projectId: "facebook-messenger-cn",
    storageBucket: "facebook-messenger-cn.appspot.com",
    messagingSenderId: "818877205714",
    appId: "1:818877205714:web:558063b527be9ec65d310b",
    measurementId: "G-1F1589RP5L"
});

const db = firebaseApp.firestore();

export default db;