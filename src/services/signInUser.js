import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const SignInUser = async (email, password) => {
   const auth = getAuth();
   const userCredential = await signInWithEmailAndPassword(auth, email, password)
   return userCredential.user
};
