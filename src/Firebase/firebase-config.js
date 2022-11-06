// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apikey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket ,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAO7Uk9QLHYh1reEXFwQo7ALAryJ1UMMHQ",
  authDomain: "follow-our-direction.firebaseapp.com",
  projectId: "follow-our-direction",
  storageBucket: "follow-our-direction.appspot.com",
  messagingSenderId: "206530201584",
  appId: "1:206530201584:web:199a9e9dd0de44ef9dff35"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;