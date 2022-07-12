import { useState, useEffect } from "react";
import { Question } from "../Question";
import { GetAllChats } from "../../../services/GetChats";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase";

export const Chats = () => {
   const [dataChats, setDataChats] = useState({});

   useEffect(() => {
      const getAllChats = async () => {
         const refForumQuestions = ref(database, "forumQuestions/");
         await onValue(refForumQuestions, (snapshot) => {
            console.log(snapshot.val());
            return snapshot.val();
         });
         console.log('n');
      };
      getAllChats()
   }, []);

   return <>{}</>;
};
