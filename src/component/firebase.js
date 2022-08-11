// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useEffect, useState } from "react";
import { getDatabase } from 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArU7aG9-yfNhSLzVlDQ_AMPcdnKHmh3ms",
  authDomain: "react-front-end-880a1.firebaseapp.com",
  projectId: "react-front-end-880a1",
  storageBucket: "react-front-end-880a1.appspot.com",
  messagingSenderId: "253514527727",
  appId: "1:253514527727:web:de80c3bb6016bf37c73c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);


//註冊帳號
export const signup = (email,password)=> { 
 return createUserWithEmailAndPassword(auth , email , password);
}

export const signin = (email,password)=> { 
  return signInWithEmailAndPassword(auth , email , password);
 }

 export const logout = ()=>{
  return signOut(auth);
 }
// 確認登入狀態
export const useAuth = ()=> {
  const [currentUser , setCurrentUser] = useState();

useEffect(()=>{
  const unsub =onAuthStateChanged(auth , (user)=>{setCurrentUser(user)});
  
  return unsub; 
  }, [])

  return currentUser;
}


//database
export const db = getDatabase(app)