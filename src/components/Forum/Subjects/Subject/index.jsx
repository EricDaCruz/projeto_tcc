import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByCategory } from "../../../../services/GetQuestionsByCategory";
import { Questions } from "../../Questions";
import { LoaderQuestion } from "../../../LoaderQuestion";
import { sortByDate } from "../../../../helpers/Sort";
/* Classes */
import { Question } from "../../../../services/Question";

export const Subject = () => {
   const { category } = useParams();

   const [subjects, setSubjects] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      const question = new Question();
      question.GetQuestionsByCategory(category).then((data) => {
         setSubjects(data);
         setLoading(false);
      })
   }, []);

   if (subjects.length !== 0) {
      console.log(subjects);
   }

   return (
      <>
         {loading ? (
            <LoaderQuestion />
         ) : subjects.length !== 0 ? (
            subjects.map((question) => {
               // const formatContent = question.content.split('\n\n')
               return (
                  <Questions
                     key={question.questionUid}
                     title={question.title}
                     content={question.content}
                     postDate={question.postDate}
                     stars={question.stars}
                     userId={question.userId}
                     questionUid={question.questionUid}
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
