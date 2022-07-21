import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const GetQuestion = async (chatUid) => {
   const chatRef = doc(db, "forum-chats", chatUid);
   const chatSnap = await getDoc(chatRef);

   if (chatSnap.exists()) {
      return chatSnap.data()
   } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
   }
};

export const FavoriteQuestion = async (chatUid, newStars, dataChat) => {
    await setDoc(doc(db, "forum-chats", chatUid), {...dataChat, stars: newStars });
}
