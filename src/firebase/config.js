import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAbT-VRlvfnVV7FoUsQZvrauG7QbPSvQYU",
    authDomain: "firegram-afe61.firebaseapp.com",
    projectId: "firegram-afe61",
    storageBucket: "firegram-afe61.appspot.com",
    messagingSenderId: "119908523847",
    appId: "1:119908523847:web:891202d8bfe8aa2ca43662"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };