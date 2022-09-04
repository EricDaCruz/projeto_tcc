import { useState, useEffect } from "react";
import { Questions } from "../Questions";
import { LoaderQuestion } from "../../LoaderQuestion";
import { useQuestions } from "../../../contexts/QuestionsContext";
/* Classes */
import { Question } from "../../../services/Question";

export const Chats = () => {
   const {questions, setQuestions} = useQuestions()
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      const question = new Question();
      question.GetAllQuestions().then(quest => {setQuestions(quest);});
      setLoading(false);
   }, []);

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : questions.length > 0 ? (
            questions.map((chat) => {
               const {
                  title,
                  postDate,
                  content,
                  stars,
                  userId,
                  questionUid,
                  images
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
                     images={images}
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
