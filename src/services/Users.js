import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { toast } from "react-toastify";
/* Classes */
import { Storage } from "./Storage";

export class Users {
   constructor(data, uid) {
      this.data = data;
      this.uid = uid;

   }

   // Create Account with Email and Password
   async CreateAuthEmail() {
      const authentication = await createUserWithEmailAndPassword(
         auth,
         this.data.email,
         this.data.password
      ).catch((err) => err.code);

      return authentication;
   }
   async RegisterUser(uid) {
      console.log("Register", uid);
      const userRef = doc(db, "users", uid);
      const data = {
         name: this.data.name,
         email: this.data.email,
         dateBorn: this.data.dateBorn,
         phone: this.data.phone,
         location: {
            state: this.data.state,
            city: this.data.city,
         },
         interests: this.data.interests,
         username: this.data.username,
         photoUrl: "",
      };

      await setDoc(userRef, data);
   }
   // SingIn and SingOut
   async SignInUser() {
      try {
         const userCredential = await signInWithEmailAndPassword(
            auth,
            this.data.email,
            this.data.password
         );
         const storage = new Storage("uid", userCredential.user.uid);
         storage.SetItemSessionStorage();
         toast.success("Usuário Logado com sucesso");
      } catch (error) {
         console.log(error);
         //   switch (error.code) {
         //       case "auth/user-not-found":
         //          toast.error("Usuário não encontrado");
         //          break;
         //       case "auth/wrong-password":
         //       case "auth/invalid-email":
         //          toast.error("Senha ou usuário inválido");
         //          break;
         //       case "auth/too-many-requests":
         //          toast.warning(
         //             "Muitas tentativas inválidas. Tente novamente mais tarde!"
         //          );
         //          break;
         //       case "auth/network-request-failed":
         //          toast.warning("Verifique a conexão com a internet");
         //          break;
         //    }
      }
   }
   SignOutUser() {
      const storage = new Storage("uid", "");
      signOut(auth)
         .then(() => {
            // Sign-out successful.
            toast.success("Usuário Deslogado");
            storage.RemoveItemSessionStorage();
         })
         .catch((error) => {
            toast.error("Error: ", error.message);
         });
   }
}
