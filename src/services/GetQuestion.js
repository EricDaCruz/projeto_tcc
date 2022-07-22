import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const GetQuestion = async (questionId) => {
   const questionRef = doc(db, "forum-chats", questionId);
   const questionSnap = await getDoc(questionRef);

   if (questionSnap.exists()) {
      return {...questionSnap.data(), chatUid: questionSnap.id};
   } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
   }
};
