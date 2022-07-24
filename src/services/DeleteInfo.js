import { doc, deleteDoc, deleteField, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const DeleteQuestion = async (chatUid) => {
    const forumRef = doc(db, "forum-chats", chatUid)    

    await updateDoc(forumRef, {
        category: deleteField(),
        comments: deleteField(),
        content: deleteField(),
        postDate: deleteField(),
        stars: deleteField(),
        title: deleteField(),
        userId: deleteField(),
    });
    await deleteDoc(forumRef);

    window.location.reload()
}