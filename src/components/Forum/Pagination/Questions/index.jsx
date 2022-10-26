import { useState } from "react";
import { Questions } from "../../Questions";
import { PaginationNav } from "../PaginationNav";

export function PaginationQuestions({ list }) {
   const [currentPage, setCurrentPage] = useState(1);
   const [questionsPerPage, setQuestionsPerPage] = useState(10);

   //Get current questions
   const indexOfLastQuestion = currentPage * questionsPerPage;
   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
   const currentQuestions = list.slice(
      indexOfFirstQuestion,
      indexOfLastQuestion
   );

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   return (
      <>
         {currentQuestions.map((question) => {
            const {
               title,
               postDate,
               content,
               stars,
               userId,
               questionUid,
               image,
            } = question;

            return (
               <Questions
                  key={questionUid}
                  title={title}
                  postDate={postDate}
                  content={content}
                  stars={stars}
                  userId={userId}
                  questionUid={questionUid}
                  image={image}
               />
            );
         })}

         <PaginationNav
            itensPerPages={questionsPerPage}
            totalQuestions={list.length}
            paginate={paginate}
         />
      </>
   );
}
