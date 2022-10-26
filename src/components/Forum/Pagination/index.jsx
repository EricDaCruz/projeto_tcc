import { useState } from "react";
import { Questions } from "../Questions";
import { PaginationNav } from "./PaginationNav";

export function Pagination({ list }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(3);

  //Get current questions
  const indexOfLastQUestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQUestion - questionsPerPage;
  const currentQuestions = list.slice(
    indexOfFirstQuestion,
    indexOfLastQUestion
  );

  console.log(currentQuestions);

  return (
    <>
      {currentQuestions.map((question) => {
        const { title, postDate, content, stars, userId, questionUid, image } =
          question;

        return (
          <Questions
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

      <PaginationNav questionsPerPages={questionsPerPage} totalQuestions={list.length}/>
    </>
  );
}
