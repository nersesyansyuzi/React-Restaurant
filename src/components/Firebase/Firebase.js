
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDbeO4_vzFEj8P5Piz_L4c9MeJJTUQIFWw",
  authDomain: "restaurant-9a72c.firebaseapp.com",
  projectId: "restaurant-9a72c",
  storageBucket: "restaurant-9a72c.appspot.com",
  messagingSenderId: "211694486609",
  appId: "1:211694486609:web:a413abce94804fbce12470",
  measurementId: "G-FTTGZ5824H"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)


export const createUser=async (auth,email,pass)=>{
 const user= await createUserWithEmailAndPassword(auth,email,pass).catch((err)=>console.log(err))

}

export const siginUser=(auth,email,pass)=>{
    const user=signInWithEmailAndPassword(auth,email,pass)
    return user
}


