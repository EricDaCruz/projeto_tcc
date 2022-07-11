import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

export const GetAllChats = () => {
    const refForumQuestions = ref(database, 'forumQuestions/')
    onValue(refForumQuestions, result => {
      console.log(result.val())
      return result.val()
    })
};
