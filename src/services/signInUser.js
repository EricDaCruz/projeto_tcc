import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignInUser = async (email, password) => {
   const userCredential = await signInWithEmailAndPassword(auth, email, password)
   return userCredential.user
};
