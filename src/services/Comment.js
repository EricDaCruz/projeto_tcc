import {
   doc,
   setDoc,
   collection,
   query,
   where,
   getDocs,
   getDoc,
   updateDoc,
   deleteDoc,
   deleteField,
} from "firebase/firestore";
import { db } from "../firebase";
import moment from "moment";
import { sortByDate, sortByStars } from "../helpers/Sort";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
/* Classes */
import { User } from "./User";
import { Notification } from "./Notification";
import { Storage } from "./Storage";

export class Comment {
   constructor(commentUid, questionUid, userId, data) {
      this.commentUid = commentUid;
      this.questionUid = questionUid;
      this.userId = userId;
      this.data = data;
   }

   // Create a new comment
   async RegisterComments(uid, userIdSendQuestion) {
      //Pegando o username de quem comentou
      const storage = new Storage("uid");
      const userLogged = storage.GetItemSessionStorage();
      const user = new User("", userLogged);
      const { username } = await user.GetInfoUser();
      //Salvando no banco de dados
      setDoc(doc(db, "comments-forum-chats", uid), {
         questionUid: this.questionUid,
         content: this.data.answer,
         postDate: moment().format("YYYY-MM-DD HH:mm"),
         stars: [],
         userId: this.userId,
      }).then(() => {
         //Enviando notificação para o usuário que fez a pergunta
         if (userLogged !== userIdSendQuestion) {
            const notification = new Notification("", this.userId, {
               type: "favorite-question",
               userId: userIdSendQuestion,
               notification: `${username} respondeu sua questão!`,
               questionUid: this.questionUid,
            });
            notification.SendNotification();
         }
      });
   }
   // Get Comment
   async GetComments() {
      const commentsQuery = query(
         collection(db, "comments-forum-chats"),
         where("questionUid", "==", this.questionUid)
      );
      const listCommets = [];

      const commentsQuerySnapshot = await getDocs(commentsQuery);
      commentsQuerySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         listCommets.push({ ...doc.data(), commentUid: doc.id });
      });
      const sortCommentsByDate = sortByDate(listCommets); // Organizando por data de postagem
      const sortCommentsByStars = sortByStars(sortCommentsByDate); // Organizando por quantidade de estrelas

      return sortCommentsByStars;
   }
   async GetCommentByUid() {
      const commentRef = doc(db, "comments-forum-chats", this.commentUid);
      const commentSnap = await getDoc(commentRef);

      if (commentSnap.exists) {
         return { ...commentSnap.data(), commentUid: commentSnap.id };
      } else {
         toast.error("Questão não encontrada!");
      }
   }
   async GetMyComments() {
      const myCommentsQuery = query(
         collection(db, "comments-forum-chats"),
         where("userId", "==", this.userId)
      );

      const myComments = [];

      const myCommentsQuerySnapshot = await getDocs(myCommentsQuery);
      myCommentsQuerySnapshot.forEach((doc) => {
         myComments.push({ ...doc.data(), commentUid: doc.id });
      });

      const sortCommentsByDate = sortByDate(myComments); // Organizando por data de postagem
      const sortCommentsByStars = sortByStars(sortCommentsByDate); // Organizando por quantidade de estrelas
      return sortCommentsByStars;
   }
   // Favorite a comment
   async FavoriteComment(newStars) {
      const userLogged = new Storage("uid").GetItemSessionStorage();
      const user = new User("", userLogged); // Quem foi o gatilho da notificação
      const { username } = await user.GetInfoUser();

      updateDoc(doc(db, "comments-forum-chats", this.commentUid), {
         stars: newStars,
      }).then(() => {
         if (this.userId !== userLogged && newStars.includes(userLogged)) {
            const notification = new Notification("", this.userId, {
               type: "favorite-comment",
               userId: this.userId,
               notification: `${username} favoritou seu comentário!`,
               questionUid: this.questionUid,
            });
            notification.SendNotification();
         }
      });
   }
   // Denounce Comment
   async DenounceComment(usernameSendComment) {
      const userLogged = new Storage("uid").GetItemSessionStorage();
      const user = new User("", userLogged); // Quem foi o gatilho da notificação
      const { username } = await user.GetInfoUser();

      emailjs.init(import.meta.env.VITE_APP_USER_ID);
      const template_params = {
         commentUid: this.commentUid,
         usernameSendComment: usernameSendComment,
         date: this.data.postDate,
         content: this.data.content,
         usernameSendDenounce: username,
      };

      emailjs
         .send(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_COMMENT_TEMPLATE_ID,
            template_params
         )
         .then(() => {
            toast.info(
               "Comentário denunciado, logo mais nossos administradores irão verificar!"
            );
            if (this.userId !== userLogged) {
               const notification = new Notification("", this.userId, {
                  type: "denounce-comment",
                  userId: this.userId, // Para quem vai a notificação
                  notification: `${username} denunciou seu comentário!`,
                  questionUid: this.questionUid,
               });
               notification.SendNotification();
            }
         });
   }
   //Delete comment
   async DeleteComment() {
      const commentsRef = doc(db, "comments-forum-chats", this.commentUid);

      await updateDoc(commentsRef, {
         chatUid: deleteField(),
         content: deleteField(),
         postDate: deleteField(),
         stars: deleteField(),
         userId: deleteField(),
      });
      await deleteDoc(commentsRef);
   }
}
