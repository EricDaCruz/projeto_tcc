import { useState, useEffect } from "react";
import { GetMyAnswer } from "../../../services/GetMyAnswer";
import { GetItemSessionStorage } from "../../../services/Storage";
import { sortByDate, sortByStars } from "../../../helpers/SortQuestionsByDate";
import { Comments } from "../QuestionWithComments/Comments";

export const MyAnswer = (params) => {
   const userId = GetItemSessionStorage("uid");
   const [answerData, setAnswerData] = useState([]);

   useEffect(() => {
      GetMyAnswer(userId).then((answers) => {
        const sortComments = sortByDate(answers)
        const sortCommentsByStars = sortByStars(sortComments)
        setAnswerData(sortCommentsByStars)
      });
   }, []);

   return (
      <div>
         {answerData ? (
            answerData.map((answer) => {
                const {commentUid, content, stars, postDate, chatUid} = answer;

               return (
                  <Comments
                     key={commentUid}
                     content={content}
                     stars={stars}
                     postDate={postDate}
                     chatUid={chatUid}
                     commentUid={commentUid}
                     userId={userId}
                  />
               );
            })
         ) : (
            <div>
               <div>
                  <p className="has-text-centered is-size-4">
                     Você ainda não respondeu nenhuma pergunta 😭
                  </p>
               </div>
            </div>
         )}
      </div>
   );
};
