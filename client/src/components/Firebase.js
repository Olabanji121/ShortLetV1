import app from 'firebase'

const config = {
    apiKey: "AIzaSyCE1tt7LJTsDDiWGzK3Sh5yBFi75Mq0OlY",
    authDomain: "shortletng-3e4e4.firebaseapp.com",
    databaseURL: "https://shortletng-3e4e4.firebaseio.com",
    projectId: "shortletng-3e4e4",
    storageBucket: "shortletng-3e4e4.appspot.com",
    messagingSenderId: "272417268460",
    appId: "1:272417268460:web:302d3559ecfd2c74c37bc9",
    measurementId: "G-8P1K3M78RY"
  };


  class Firebase {
      constructor(){
          app.initializeApp(config)
      }
  }

  export default Firebase