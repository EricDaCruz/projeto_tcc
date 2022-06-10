import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase';
import { RegisterUser } from "./RegisterUser";


export const CreateAuthEmail = async (data) => {
    initializeApp(firebaseConfig)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
       // Signed in
       const user = userCredential.user;
       const uid = user.uid;
       RegisterUser(data, uid)
    })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("Erro cadastro",errorCode, errorMessage);
    });
};
