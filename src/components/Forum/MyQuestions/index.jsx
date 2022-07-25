import { useState, useEffect } from "react";
import { Question } from "../Question";
import { getMyQuestions } from "../../../services/GetMyQuestions";
import { GetItemSessionStorage } from "../../../services/Storage";
import { LoaderQuestion } from "../../LoaderQuestion";
import { sortByDate } from "../../../helpers/SortQuestionsByDate";

export const MyQuestions = () => {
   const [myQuestions, setMyQuestions] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(true);
      const userUid = GetItemSessionStorage("uid");
      getMyQuestions(userUid).then((questions) => {
         const sortQuestions = sortByDate(questions);
         setMyQuestions(sortQuestions);
         setLoading(false);
      });
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
                  comments,
                  userId,
                  chatUid,
               } = question;
               return (
                  <Question
                     key={chatUid}
                     title={title}
                     postDate={postDate}
                     content={content}
                     stars={stars}
                     comments={12}
                     userId={userId}
                     chatUid={chatUid}
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
