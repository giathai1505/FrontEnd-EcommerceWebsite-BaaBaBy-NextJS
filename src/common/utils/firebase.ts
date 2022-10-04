import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApTHegj-vL4AD6UV7hqlavK7pvW3KOf5o",
  authDomain: "tuyendungvn-ec100.firebaseapp.com",
  databaseURL: "https://tuyendungvn-ec100-default-rtdb.firebaseio.com",
  projectId: "tuyendungvn-ec100",
  storageBucket: "tuyendungvn-ec100.appspot.com",
  messagingSenderId: "45165647490",
  appId: "1:45165647490:web:6df36b37446ebc2a43869b",
  measurementId: "G-L4S0234ZKC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
