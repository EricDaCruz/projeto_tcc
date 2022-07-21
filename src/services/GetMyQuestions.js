import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getMyQuestions = async (userId) => {
   const chatRef = collection(db, "forum-chats");
   const chatQuery = query(chatRef, where("userId", "==", userId));
   const chatQuerySnapshot = await getDocs(chatQuery);
   const listMyQuestions = [];

   chatQuerySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    listMyQuestions.push({...doc.data(), chatUid: doc.id});
   });

   return listMyQuestions
};
