import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const SignInUser = async (email, password) => {
   const auth = getAuth();
   return await signInWithEmailAndPassword(auth, email, password).userImpl
      
};
