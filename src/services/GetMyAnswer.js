import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const GetMyAnswer = async (userId) => {
   const myAnswerQuery = query(
      collection(db, "comments-forum-chats"),
      where("userId", "==", userId)
   );

   const myAnswers = []

   const myAnswerQuerySnapshot = await getDocs(myAnswerQuery);
   myAnswerQuerySnapshot.forEach((doc) => {
      myAnswers.push({...doc.data(), commentUid: doc.id })
   });

   return myAnswers;
};
