import { doc, collection, getDocs, getDoc, setDoc, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const GetQuestion = async (chatUid) => {
   const chatRef = doc(db, "forum-chats", chatUid);
   const chatSnap = await getDoc(chatRef);

   if (chatSnap.exists()) {
      return chatSnap.data();
   } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
   }
};
export const FavoriteQuestion = async (chatUid, newStars, dataChat) => {
   await setDoc(doc(db, "forum-chats", chatUid), {
      ...dataChat,
      stars: newStars,
   });
};
export const GetFavoriteQuestions = async (userUid) => {
   const chatRef = collection(db, "forum-chats");
   const queryChat = query(chatRef, where("stars", "array-contains", userUid));
   const queryChatSnapshot = await getDocs(queryChat);
   const listChatFavorite = []
   queryChatSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      listChatFavorite.push({...doc.data(), chatUid: doc.id});
   });

   return listChatFavorite;
};
