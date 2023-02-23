import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDw6gYVseIuKJJJE70nmDz0aEUg8fjtmI4",
  authDomain: "app-biblioteca-2e035.firebaseapp.com",
  projectId: "app-biblioteca-2e035",
  storageBucket: "app-biblioteca-2e035.appspot.com",
  messagingSenderId: "531553862813",
  appId: "1:531553862813:web:71e5a98642e86ed4f50074"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
