import { useState, useEffect } from "react";
import { GetMyAnswer } from "../../../services/GetMyAnswer";
import { Storage } from "../../../services/Storage";
import { sortByDate, sortByStars } from "../../../helpers/Sort";
import { Comments } from "../QuestionWithComments/Comments";

export const MyAnswer = () => {
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();
   const [answerData, setAnswerData] = useState([]);

   useEffect(() => {
      GetMyAnswer(userId).then((answers) => {
         const sortComments = sortByDate(answers);
         const sortCommentsByStars = sortByStars(sortComments);
         setAnswerData(sortCommentsByStars);
      });
   }, []);

   return (
      <div>
         {answerData.length > 0 ? (
            answerData.map((answer) => {
               const { commentUid, content, stars, postDate, chatUid } = answer;
               return (
                  <Comments
                     key={commentUid}
                     content={content}
                     stars={stars}
                     postDate={postDate}
                     chatUid={chatUid}
                     commentUid={commentUid}
                     userId={userLogged}
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
