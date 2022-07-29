import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByCategory } from "../../../../services/GetQuestionsByCategory";
import { Questions } from "../../Questions";
import { LoaderQuestion } from "../../../LoaderQuestion";
import { sortByDate } from "../../../../helpers/Sort";

export const Subject = () => {
   const { category } = useParams();

   const [subject, setSubject] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      getQuestionsByCategory(category).then((questions) => {
         const sortQuestions = sortByDate(questions)
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
               const formatContent = question.content.split('\n\n')
               return (
                  <Questions
                     key={question.chatUid}
                     title={question.title}
                     content={formatContent}
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