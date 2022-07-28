import { useState, useEffect } from "react";
import { Questions } from "../Questions";
import { getMyQuestions } from "../../../services/GetMyQuestions";
import { Storage } from "../../../services/Storage";
import { LoaderQuestion } from "../../LoaderQuestion";
import { sortByDate } from "../../../helpers/Sort";
/* Classes */
import { Question } from "../../../services/Question";

export const MyQuestions = () => {
   const [myQuestions, setMyQuestions] = useState([]);
   const [loading, setLoading] = useState(true);
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();

   useEffect(() => {
      setLoading(true);
      const question = new Question()
      question.GetMyQuestions(userLogged).then(questions => {
         setMyQuestions(questions);
         setLoading(false);
      })
   }, []);

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : myQuestions.length > 0 ? (
            myQuestions.map((question) => {
               const {
                  title,
                  postDate,
                  content,
                  stars,
                  userId,
                  questionUid,
               } = question;
               return (
                  <Questions
                     key={questionUid}
                     title={title}
                     postDate={postDate}
                     content={content}
                     stars={stars}
                     userId={userId}
                     questionUid={questionUid}
                  />
               );
            })
         ) : (
            <div>
               <p className="has-text-centered is-size-4">
                 Você ainda não fez uma pergunta 😭
               </p>
            </div>
         )}
      </>
   );
};
