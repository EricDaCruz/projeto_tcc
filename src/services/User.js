import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   sendPasswordResetEmail,
   updateEmail,
   deleteUser,
} from "firebase/auth";
import {
   doc,
   setDoc,
   getDoc,
   updateDoc,
   deleteDoc,
   deleteField,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { toast } from "react-toastify";
/* Validações */
import { format } from "telefone";
import { validatePhoneNumber } from "../helpers/ValidFormRegister";
import validator from "validator";
import { FindExistUserName } from "../services/FindExistUserName";
import moment from "moment";
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
      let isDataValid = true;
      const updateUserEmail = async (email) => {
         updateEmail(auth.currentUser, email)
            .then(async () => {
               if (this.data.dateBorn) {
                  if (moment(this.data.dateBorn).isValid()) {
                     if (
                        moment(this.data.dateBorn).isAfter(
                           moment().subtract(10, "years")
                        )
                     ) {
                        isDataValid = false;
                        toast.error("Você não pode ser menor de 10 anos");
                     }
                  } else {
                     isDataValid = false;
                     toast.error("Data de nascimento inválida");
                  }
               }
               if (this.data.email) {
                  if (!validator.isEmail(this.data.email)) {
                     isDataValid = false;
                     toast.error("Email inválido");
                  }
               }
               if (this.data.username) {
                  const existUsernames = await FindExistUserName();
                  if (existUsernames.includes(this.data.username)) {
                     isDataValid = false;
                     toast.error("Este nome de usuário já existe");
                  }
               }
               if (this.data.phone) {
                  if (!validatePhoneNumber(this.data.phone)) {
                     isDataValid = false;
                     toast.error("Celular inválido");
                  }
               }

               if (isDataValid) {
                  await updateDoc(userRef, this.data);
                  toast.success("Perfil atualizado com sucesso!");
               }
            })
            .catch((error) => {
               console.log("User ->", error);
               /*  auth/requires-recent-login */
               switch (error.code) {
                  case "auth/email-already-in-use":
                     toast.error("Email já em uso");
                     break;
                  case "auth/invalid-email":
                     toast.error("Email inválido");
                     break; 
                  case "auth/requires-recent-login":
                     toast.error("Estamos com dificuldades para validar seu usuário, tente logar novamente.");
                     break;
               }
            });
      };
      updateUserEmail(this.data.email);
   }
   async DeleteProfile() {
      const userRef = doc(db, "users", this.uid);
      const question = new Question();
      const comment = new Comment("", "", this.uid);
      // Deletar questões feitas pelo usuário
      //Pegar todas as questões feitas pelo usuário
      const questions = await question.GetMyQuestions(this.uid);
      //Se tiver alguma questão deletar
      if (questions.length > 0) {
         questions.forEach(async (question) => {
            const quest = new Question(question.questionUid);
            await quest.DeleteQuestion(question.questionUid, true);
         });
      }
      // Deletar comentários feitos pelo usuário
      //Pegar todos os comentários feitos pelo usuário
      const comments = await comment.GetMyComments(this.uid);
      //Se tiver algum comentário deletar
      if (comments.length > 0) {
         comments.forEach(async (comment) => {
            const com = new Comment(comment.commentUid);
            await com.DeleteComment(true);
         });
      }
      // Tirar curtidas feitas pelo usuário - não é certeza
      //Pegar todas as curtidas feitas pelo usuário
      const favoriteQuestion = await question.GetFavoriteQuestions(this.uid);
      //Se houver curtidas, remover as feitas pelo usuário
      if (favoriteQuestion.length > 0) {
         favoriteQuestion.forEach(async (question) => {
            //Atualizar as curtidas
            const questionRef = doc(db, "forum-chats", question.questionUid);
            const newStars = question.stars.filter((star) => star !== this.uid);
            await updateDoc(questionRef, {
               stars: newStars,
            });
         });
      }
      //Deslogar usuário
      new Storage("uid").RemoveItemSessionStorage();
      // Deletar usuário do banco
      updateDoc(userRef, {
         dateBorn: deleteField(),
         email: deleteField(),
         interests: deleteField(),
         location: deleteField(),
         name: deleteField(),
         phone: deleteField(),
         photoUrl: deleteField(),
         username: deleteField(),
      })
         .then(async () => {
            await deleteDoc(userRef);
         })
         .catch((error) => {
            toast.error("Erro ao deletar usuário no banco");
         });
      deleteUser(auth.currentUser).catch((error) => {
         switch (error.code) {
            case "auth/requires-recent-login":
               toast.error("É necessário fazer o login novamente");
               break;
            default:
               toast.error("Erro ao deletar usuário");
         }
      });
   }
}
