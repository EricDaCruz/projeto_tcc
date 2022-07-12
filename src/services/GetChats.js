import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

export const GetAllChats = () => {
   const refForumQuestions = ref(database, "forumQuestions/");
   onValue(refForumQuestions, (snapshot) => {
      console.log(snapshot.val());
      return snapshot.val();
   });
};
