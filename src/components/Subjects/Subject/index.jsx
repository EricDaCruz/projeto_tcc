import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByCategory } from "../../../services/GetQuestionsByCategory";
import { Question } from "../../Forum/Question";
import { LoaderQuestion } from "../../LoaderQuestion";
import { sortQuestionsByDate } from "../../../helpers/SortQuestionsByDate"

export const Subject = () => {
   const { category } = useParams();

   const [subject, setSubject] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      getQuestionsByCategory(category).then((questions) => {
         const sortQuestions = sortQuestionsByDate(questions)
         setSubject(sortQuestions);
         setLoading(false);
      });
   }, []);

   if (subject.length !== 0) {
      console.log(subject);
   }

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : subject.length !== 0 ? (
            subject.map((question) => {
               return (
                  <Question
                     key={question.chatUid}
                     title={question.title}
                     content={question.content}
                     postDate={question.postDate}
                     stars={question.stars}
                     userId={question.userId}
                     comments={12}
                     chatUid={question.chatUid}
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
