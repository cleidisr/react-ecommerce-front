import * as firebase from "firebase";

// Your web app's Firebase configuration Cleidiane
const firebaseConfig = {
  apiKey: "AIzaSyCuegTA9vQYXYBMQv3sZ9pXpKiSNt3ws-I",
  authDomain: "ecommerce-a5979.firebaseapp.com",
  projectId: "ecommerce-a5979",
  storageBucket: "ecommerce-a5979.appspot.com",
  messagingSenderId: "985528161708",
  appId: "1:985528161708:web:fdbe167545569865d99609"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
