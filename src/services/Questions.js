import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { sortByDate } from "../helpers/Sort";

export class Questions {
    constructor(){

    }

    async GetAllQuestions(){
        const forumQuestionsRef = collection(db, 'forum-chats')
        const forumQuestionsSnap = await getDocs(forumQuestionsRef)
        const data = []
     
        forumQuestionsSnap.forEach(question => {
           data.push({...question.data(), questionUid: question.id})
        });

        const sortQuestionsByDate = sortByDate(data);
        return sortQuestionsByDate;
    }
}