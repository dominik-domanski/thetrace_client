import firebase from 'firebase/app';

  const DB_CONFIG = {
    apiKey: "AIzaSyA7abrFpilzoN_a6fXauNZNP5v_gjli3Gs",
    authDomain: "thetracedb.firebaseapp.com",
    databaseURL: "https://thetracedb.firebaseio.com",
    projectId: "thetracedb",
    storageBucket: "thetracedb.appspot.com",
    messagingSenderId: "621799166415"
  };

  export default !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
