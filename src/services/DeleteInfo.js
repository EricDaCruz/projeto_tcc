import { doc, deleteDoc, deleteField, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Comment } from "./Comment";

export const DeleteComments = async (commentUid) => {
    const commentsRef = doc(db, "comments-forum-chats", commentUid)    

    await updateDoc(commentsRef, {
        chatUid: deleteField(),
        content: deleteField(),
        postDate: deleteField(),
        stars: deleteField(),
        userId: deleteField(),
    });
    await deleteDoc(commentsRef);

    window.location.reload()
}

export const DeleteQuestions = async (questionUid) => {
    const forumRef = doc(db, "forum-chats", questionUid)   
    const comment = new Comment('',questionUid) 
    const comments = await comment.GetComments()

    comments.forEach(comment => {
        DeleteComments(comment.commentUid)
    });

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