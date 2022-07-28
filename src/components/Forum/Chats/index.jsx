import { useState, useEffect } from "react";
import { Questions } from "../Questions";
import { LoaderQuestion } from "../../LoaderQuestion";
/* Classes */
import { Question } from "../../../services/Question";

export const Chats = () => {
   const [dataChats, setDataChats] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      const question = new Question();
      question.GetAllQuestions().then(quest => setDataChats(quest));
      setLoading(false);
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
                  userId,
                  questionUid,
               } = chat;
               return (
                  <Questions
                     key={questionUid}
                     title={title}
                     postDate={postDate}
                     content={content}
                     stars={stars}
                     userId={userId}
                     questionUid={questionUid}
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
