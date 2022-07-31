import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

export class Profile {
    constructor(email) {
        this.email = email;
    }
    
    forgotPassword(){
        const { email } = this.data;
        email ? (
            sendPasswordResetEmail(auth, email).then(() => {
              toast.success("Email de redefinição de senha enviado com sucesso, caso não encontre o email, verifique a caixa de spam!");
            })
            .catch((error) => {
               const errorCode = error.code;
               console.log(errorCode);
               switch (errorCode) {
                  case 'auth/invalid-email':
                     toast.error("Email inválido");
                     break;
                  case 'auth/user-not-found':
                     toast.error("Usuário não encontrado");
               }
            })
          ) : (
            toast.error("Por favor, preencha o campo de email")
          )
    }

}