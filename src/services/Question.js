import {
   doc,
   collection,
   getDocs,
   getDoc,
   setDoc,
   updateDoc,
   where,
   query,
   deleteDoc,
   deleteField,
} from "firebase/firestore";
import { db } from "../firebase";
import { sortByDate, sortByStars } from "../helpers/Sort";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
/* Classes */
import { User } from "./User";
import { Comment } from "./Comment";
import { Notification } from "./Notification";
import { Storage } from "./Storage";

export class Question {
   constructor(questionUid, category, title, content, postDate, userId) {
      this.questionUid = questionUid;
      this.category = category;
      this.title = title;
      this.content = content;
      this.postDate = postDate;
      this.userId = userId;
   }

   //Create Question
   async RegisterQuestions() {
      const questionRef = doc(db, "forum-chats", this.questionUid);
      await setDoc(questionRef, {
         category: this.category,
         content: this.content,
         postDate: this.postDate,
         stars: [],
         title: this.title,
         userId: this.userId,
      });
      toast.success("Questão registrada com sucesso!");
   }
   // Get Question
   async GetAllQuestions() {
      const forumQuestionsRef = collection(db, "forum-chats");
      const forumQuestionsSnap = await getDocs(forumQuestionsRef);
      const data = [];

      forumQuestionsSnap.forEach((question) => {
         data.push({ ...question.data(), questionUid: question.id });
      });

      const sortQuestionsByDate = sortByDate(data);
      return sortQuestionsByDate;
   }
   async GetQuestionByUid() {
      const questionRef = doc(db, "forum-chats", this.questionUid);
      const questionSnap = await getDoc(questionRef);

      if (questionSnap.exists) {
         return { ...questionSnap.data(), questionUid: questionSnap.id };
      } else {
         toast.error("Questão não encontrada!");
      }
   }
   async GetMyQuestions(userId) {
      const questionsRef = collection(db, "forum-chats");
      const questionsQuery = query(questionsRef, where("userId", "==", userId));
      const questionsQuerySnapshot = await getDocs(questionsQuery);
      const listMyQuestions = [];

      questionsQuerySnapshot.forEach((doc) => {
         listMyQuestions.push({ ...doc.data(), questionUid: doc.id });
      });

      const sortQuestionsByDate = sortByDate(listMyQuestions);

      return sortQuestionsByDate;
   }
   async GetQuestionsByCategory(category) {
      const questionQuery = query(
         collection(db, "forum-chats"),
         where("category", "==", category)
      );

      const listQuestions = [];

      const questionSnapshot = await getDocs(questionQuery);
      questionSnapshot.forEach((doc) => {
         listQuestions.push({ ...doc.data(), questionUid: doc.id });
      });
      const sortQuestionsByDate = sortByDate(listQuestions);
      const sortQuestionsByStars = sortByStars(sortQuestionsByDate);
      return sortQuestionsByStars;
   }
   async GetFavoriteQuestions(userId) {
      const questionsRef = collection(db, "forum-chats");
      const questionsQuery = query(
         questionsRef,
         where("stars", "array-contains", userId)
      );
      const questionQuerySnapshot = await getDocs(questionsQuery);
      const listQuestionFavorite = [];
      questionQuerySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
         listQuestionFavorite.push({ ...doc.data(), questionUid: doc.id });
      });

      const sortQuestionsByDate = sortByDate(listQuestionFavorite);
      const sortQuestionsByStars = sortByStars(sortQuestionsByDate);

      return sortQuestionsByStars;
   }
   // Favorite Question
   async FavoriteQuestion(newStars) {
      const userLogged = new Storage("uid").GetItemSessionStorage();
      const user = new User("", userLogged);
      const { username } = await user.GetInfoUser();

      updateDoc(doc(db, "forum-chats", this.questionUid), {
         stars: newStars,
      }).then(() => {
         const notification = new Notification("", this.userId, {
            type: "favorite-question",
            userId: this.userId,
            notification: `${username} favoritou sua questão!`,
            questionUid: this.questionUid,
         });
         notification.SendNotification();
      });
   }
   // Denounce Question
   async DenounceQuestion(usernameSendQuestion) {
      const userLogged = new Storage('uid').GetItemSessionStorage()
      const user = new User("", userLogged);
      const { username } = await user.GetInfoUser();
   

      emailjs.init(import.meta.env.VITE_APP_USER_ID);
      const template_params = {
         questionUid: this.questionUid,
         usernameSendQuestion: usernameSendQuestion,
         date: this.postDate,
         title: this.title,
         content: this.content,
         usernameSendDenounce: username,
      };

      emailjs
         .send(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_QUESTION_TEMPLATE_ID,
            template_params
         )
         .then((result) => {
            toast.info(
               "Questão denunciado, logo mais nossos administradores irão verificar!"
            );
            const notification = new Notification("", this.userId, {
               type: "denounce-question",
               userId: this.userId,
               notification: `${username} denunciou sua questão!`,
               questionUid: this.questionUid,
            });
            notification.SendNotification();
         });
   }
   // Delete Question
   async DeleteQuestion(commentUid) {
      const forumRef = doc(db, "forum-chats", this.questionUid);
      const comment = new Comment("", commentUid);
      const comments = await comment.GetComments();

      comments.forEach((com) => {
         const comment = new Comment(com.commentUid);
         comment.DeleteComment();
      });

      await updateDoc(forumRef, {
         category: deleteField(),
         comments: deleteField(),
         content: deleteField(),
         postDate: deleteField(),
         stars: deleteField(),
         title: deleteField(),
         userId: deleteField(),
      });
      await deleteDoc(forumRef);
   }
}
