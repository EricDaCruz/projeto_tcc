import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const GetComment = async (commentUid) => {
   const commentRef = doc(db, "comments-forum-chats", commentUid);
   const commentSnap = await getDoc(commentRef);

   if ( commentSnap.exists()) {
      return {... commentSnap.data(), commentUid: commentSnap.id};
   } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
   }
};
export const FavoriteComment= async (commentUid, newStars) => {
   await updateDoc(doc(db, "comments-forum-chats", commentUid), {
      stars: newStars,
   });
};