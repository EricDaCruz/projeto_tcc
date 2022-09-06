import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Questions } from "../../Questions";
import { LoaderQuestion } from "../../../LoaderQuestion";
import { useQuestions } from "../../../../contexts/QuestionsContext"; 
/* Classes */
import { Question } from "../../../../services/Question";

export const Subject = () => {
   const { category } = useParams();
   const {questions, setQuestions} = useQuestions()
   const [subjects, setSubjects] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      const question = new Question();
      question.GetQuestionsByCategory(category).then((data) => {
         setQuestions(data);
         setLoading(false);
      })
   }, []);

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : questions.length !== 0 ? (
            questions.map((quest) => {
               return (
                  <Questions
                     key={quest.questionUid}
                     title={quest.title}
                     content={quest.content}
                     postDate={quest.postDate}
                     stars={quest.stars}
                     userId={quest.userId}
                     questionUid={quest.questionUid}
                     image={quest.image}
                  />
               );
            })
         ) : (
            <div>
               <p className="has-text-centered is-size-4">
                  Ainda não foram feitas questões nessa categoria 😭
               </p>
            </div>
         )}
      </>
   );
};
