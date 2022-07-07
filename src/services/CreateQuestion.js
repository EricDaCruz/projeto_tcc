import { ref, set } from "firebase/database";
import { database } from '../firebase'


export const RegisterQuestions = async (chatUid, category, title, question, postDate, userId) =>{
    await set(ref(database, 'forumQuestions/' + chatUid ),{
        category: category,
        comments: [{userId:'',content:''}],
        content: question,
        postDate: postDate,
        stars: 2,
        title: title,
        userId: 'userId'
    })
}