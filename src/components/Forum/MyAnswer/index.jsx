import { useState, useEffect } from "react";
import { Comments } from "../QuestionWithComments/Comments";
/* Classes */
import { Storage } from "../../../services/Storage";
import { Comment } from "../../../services/Comment";

export const MyAnswer = () => {
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();
   const [commentData, setCommentData] = useState([]);

   useEffect(() => {
      const comment = new Comment("","",userLogged)
      comment.GetMyComments().then((comments) => setCommentData(comments))
   }, []);

   return (
      <div>
         {commentData.length > 0 ? (
            commentData.map((comment) => {
               const { commentUid, content, stars, postDate, questionUid } = comment;
               return (
                  <Comments
                     key={commentUid}
                     content={content}
                     stars={stars}
                     postDate={postDate}
                     questionUid={questionUid}
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
