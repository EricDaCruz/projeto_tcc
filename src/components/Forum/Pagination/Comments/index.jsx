import { useState } from "react";
import { Comments } from "../../QuestionWithComments/Comments";
import { PaginationNav } from "../PaginationNav";

export function PaginationComments({ list }) {
   const [currentPage, setCurrentPage] = useState(1);
   const [commentsPerPage, setCommentsPerPage] = useState(10);

   //Get current questions
   const indexOfLastQUestion = currentPage * commentsPerPage;
   const indexOfFirstQuestion = indexOfLastQUestion - commentsPerPage;
   const currentComments = list.slice(
      indexOfFirstQuestion,
      indexOfLastQUestion
   );

   console.log(currentComments);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <>
         {currentComments.map((comment) => {
            const {
               postDate,
               content,
               stars,
               userId,
               questionUid,
               commentUid,
            } = comment;

            return (
               <Comments
                  key={commentUid}
                  commentUid={commentUid}
                  postDate={postDate}
                  content={content}
                  stars={stars}
                  userId={userId}
                  questionUid={questionUid}
               />
            );
         })}

         <PaginationNav
            itensPerPages={commentsPerPage}
            totalQuestions={list.length}
            paginate={paginate}
         />
      </>
   );
}
