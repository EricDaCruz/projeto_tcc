import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const GetComments = async (questionUid) => {
   const commentsQuery = query(collection(db, "comments-forum-chats"), where("chatUid", "==", questionUid));
    const listCommets = []

   const commentsQuerySnapshot = await getDocs(commentsQuery);
   commentsQuerySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      listCommets.push({...doc.data(), commentUid: doc.id});
   });
   return listCommets;
};
