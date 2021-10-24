var contactApp = angular.module('contactApp',[]);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt-9hFdL8ZFATWghzxoDn1-OT9f3kziQQ",
  authDomain: "proyecto-final-a4e75.firebaseapp.com",
  projectId: "proyecto-final-a4e75",
  storageBucket: "proyecto-final-a4e75.appspot.com",
  messagingSenderId: "189984557983",
  appId: "1:189984557983:web:41fc4de1fe97da3b960baa"
  };
  //inicilizar la base de datos//
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore(); //LLamado de datos en la Base de Datos//

  