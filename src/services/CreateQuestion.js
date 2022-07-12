import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const RegisterQuestions = async (
   chatUid,
   category,
   title,
   question,
   postDate,
   userId
) => {
   const questionRef = doc(db, "forum-chats", chatUid);
   await setDoc(questionRef, {
      category: category,
      comments: [{ userId: "", content: "" }],
      content: question,
      postDate: postDate,
      stars: 2,
      title: title,
      userId: userId,
   });
};
