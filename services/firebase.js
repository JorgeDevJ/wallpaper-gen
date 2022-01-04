import * as firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq9ZF8tzBYQuIbNwI32Agt_A2X5Ubww3M",
  authDomain: "wallpaper-pro-1e2a4.firebaseapp.com",
  projectId: "wallpaper-pro-1e2a4",
  storageBucket: "wallpaper-pro-1e2a4.appspot.com",
  messagingSenderId: "885764452982",
  appId: "1:885764452982:web:d62b634ecb4a410ff3e557",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
