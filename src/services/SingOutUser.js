import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const SingOutUser = () => {
   const auth = getAuth();
   signOut(auth)
      .then(() => {
         // Sign-out successful.
         toast.success("Usuário Deslogado");
      })
      .catch((error) => {
        toast.error("Error: ", error.message);
      });
};
