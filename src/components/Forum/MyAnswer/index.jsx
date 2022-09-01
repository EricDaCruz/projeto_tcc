import { useState, useEffect } from "react";
import { Comments } from "../QuestionWithComments/Comments";
import { useComments } from '../../../contexts/CommentsContext'
/* Classes */
import { Storage } from "../../../services/Storage";
import { Comment } from "../../../services/Comment";

export const MyAnswer = () => {
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();
   const {comments, setComments} = useComments();

   useEffect(() => {
      const comment = new Comment("","",userLogged)
      comment.GetMyComments().then((comments) => setComments(comments))
   }, []);

   return (
      <div>
         {comments.length > 0 ? (
            comments.map((comment) => {
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
