import firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyA-RJ1VY8vQcLDwlqUpzisUapH-2Qf1xKI",
    authDomain: "tareas-firebase-db72e.firebaseapp.com",
    databaseURL: "https://tareas-firebase-db72e.firebaseio.com",
    projectId: "tareas-firebase-db72e",
    storageBucket: "tareas-firebase-db72e.appspot.com",
    messagingSenderId: "792863275391",
    appId: "1:792863275391:web:8b071639aa19bace8d024a"
  };

  export default firebase.initializeApp(firebaseConfig);