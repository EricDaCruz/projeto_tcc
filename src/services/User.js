import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  deleteUser,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { toast } from "react-toastify";
/* Classes */
import { Storage } from "./Storage";
import { Question } from "./Question";
import { Comment } from "./Comment";

export class User {
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
      photoUrl: this.data.photoUrl,
    };

    await setDoc(userRef, data);
  }
  // Get Info User
  async GetInfoUser() {
    const userRef = doc(db, "users", this.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
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
      return true;
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("Usuário não encontrado");
          break;
        case "auth/wrong-password":
        case "auth/invalid-email":
          toast.error("Senha ou usuário inválido");
          break;
        case "auth/too-many-requests":
          toast.warning(
            "Muitas tentativas inválidas. Tente novamente mais tarde!"
          );
          break;
        case "auth/network-request-failed":
          toast.warning("Verifique a conexão com a internet");
          break;
      }
    }
  }
  async SignOutUser() {
    const storage = new Storage("uid");
    await signOut(auth);
    storage.RemoveItemSessionStorage();
  }
  // Forgot password
  ForgotPassword() {
    const { email } = this.data;
    email
      ? sendPasswordResetEmail(auth, email)
          .then(() => {
            toast.success(
              "Email de redefinição de senha enviado com sucesso, caso não encontre o email, verifique a caixa de spam!"
            );
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            switch (errorCode) {
              case "auth/invalid-email":
                toast.error("Email inválido");
                break;
              case "auth/user-not-found":
                toast.error("Usuário não encontrado");
            }
          })
      : toast.error("Por favor, preencha o campo de email");
  }
  async UpdateProfile() {
    const userRef = doc(db, "users", this.uid);
    const updateUserEmail = (email) => {
      updateEmail(auth.currentUser, email)
        .then(async () => {
          await updateDoc(userRef, this.data);
          toast.success("Perfil atualizado com sucesso!");
        })
        .catch((error) => {
          console.log('User ->', error.code);
          switch (error.code) {
            case "auth/email-already-in-use":
              toast.error("Email já em uso");
              break;
            case "auth/invalid-email":
              toast.error("Email inválido");
          }
        });
    }
    updateUserEmail(this.data.email)
  }
  async DeleteProfile() {
    const userRef = doc(db, "users", this.uid);
    deleteUser(auth.currentUser).then(() => {
      // Deletar questão feita pelo usuário

      // Deletar comentários feitos pelo usuário

      // Tirar curtidas feitas pelo usuário - não é certeza

      // Deletar usuário do banco

      // toast de sucesso

    }).catch((error) => {
      // toast de error.
    });
  }
}
