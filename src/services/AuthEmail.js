import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../firebase';


export const CreateAuthEmail = async (email, password) => {
    initializeApp(firebaseConfig)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       // Signed in
       const user = userCredential.user;
       console.log(user);
    })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("Erro cadastro",errorCode, errorMessage);
    });
};
