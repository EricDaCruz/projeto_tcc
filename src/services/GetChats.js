import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

export const GetAllChats = async () => {
   const forumChatsRef = collection(db, 'forum-chats')
   const forumChatsSnap = await getDocs(forumChatsRef)
   const data = []

   forumChatsSnap.forEach(chat => {
      data.push({...chat.data(), chatUid: chat.id})
   });

   return data
};
