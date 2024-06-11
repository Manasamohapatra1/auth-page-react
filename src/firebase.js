// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2oETjTWJiyOpyIGgCCWdsLyeMQEoVaAY",
  authDomain: "login-page-55ff1.firebaseapp.com",
  projectId: "login-page-55ff1",
  storageBucket: "login-page-55ff1.appspot.com",
  messagingSenderId: "375048063722",
  appId: "1:375048063722:web:58c80a0a95c646547ae593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize firebase authentication and get areference to the service
export const auth = getAuth(app);
