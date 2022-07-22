import { useState, useEffect } from "react";
import { Question } from "../Question";
import { GetAllChats } from "../../../services/GetChats";
import { LoaderQuestion } from "../../LoaderQuestion";
import { sortQuestionsByDate } from "../../../helpers/SortQuestionsByDate";

export const Chats = () => {
   const [dataChats, setDataChats] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      GetAllChats().then((questions) => {
         const sortQuestions = sortQuestionsByDate(questions);
         setDataChats(sortQuestions);
         setLoading(false);
      });
   }, []);

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : dataChats.length > 0 ? (
            dataChats.map((chat) => {
               const {
                  title,
                  postDate,
                  content,
                  stars,
                  comments,
                  userId,
                  chatUid,
               } = chat;
               return (
                  <Question
                     key={chatUid}
                     title={title}
                     postDate={postDate}
                     content={content}
                     stars={stars}
                     userId={userId}
                     chatUid={chatUid}
                     isInQuestion={false}
                  />
               );
            })
         ) : (
            <div>
               <p className="has-text-centered is-size-4">
                  Não há questões ainda 😭. Então, seja o primeiro a ter sua
                  questão publicada...
               </p>
            </div>
         )}
      </>
   );
};
