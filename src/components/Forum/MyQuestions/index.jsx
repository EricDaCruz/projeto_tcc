import { useState, useEffect } from "react";
import { Questions } from "../Questions";
import { Storage } from "../../../services/Storage";
import { LoaderQuestion } from "../../LoaderQuestion";
import {useQuestions} from '../../../contexts/QuestionsContext'
/* Classes */
import { Question } from "../../../services/Question";

export const MyQuestions = () => {
   const {questions, setQuestions} = useQuestions()
   const [loading, setLoading] = useState(true);
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();

   useEffect(() => {
      setLoading(true);
      const question = new Question()
      question.GetMyQuestions(userLogged).then(quests => {
         setQuestions(quests)
         setLoading(false);
      })
   }, []);

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : questions.length > 0 ? (
            questions.map((question) => {
               const {
                  title,
                  postDate,
                  content,
                  stars,
                  userId,
                  questionUid,
                  image
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
                     image={image}
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
