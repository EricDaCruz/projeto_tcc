import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const CreateComments = async (chatUid, userId, content) => {
   await setDoc(doc(db, "comments-forum-chats", uuidv4()), {
      chatUid,
      content,
      postDate: moment().format("YYYY-MM-DD HH:mm"),
      stars: [],
      userId,
   });
};
