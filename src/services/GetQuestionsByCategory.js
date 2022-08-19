import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getQuestionsByCategory = async (category) => {
   const questionQuery = query(
      collection(db, "forum-chats"),
      where("category", "==", category)
   );

   const listQuestions = []

   const questionSnapshot = await getDocs(questionQuery);
   questionSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.data());

    listQuestions.push({...doc.data(), q: doc.id});
   });

   return listQuestions;
};
