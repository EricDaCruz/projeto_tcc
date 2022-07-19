import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionsByCategory } from "../../../services/GetQuestionsByCategory";
import { Question } from "../../Forum/Question";

export const Subject = () => {
   const { category } = useParams();

   const [subject, setSubject] = useState([]);

   useEffect(() => {
      getQuestionsByCategory(category).then((questions) =>
         setSubject(questions)
      );
   }, []);

   if (subject.length !== 0) {
      console.log(subject);
   }

   return (
      <>
         {subject.length !== 0 ? (
            subject.map((question, key) => {
               return (
                  <Question
                     key={key}
                     title={question.title}
                     content={question.content}
                     postDate={question.postDate}
                     stars={question.stars}
                     comments={12}
                  />
               );
            })
         ) : (
            <div>
                <p className="has-text-centered is-size-4">Ainda não foram feitas questões nessa categoria 😭</p>
            </div>
         )}
      </>
   );
};
