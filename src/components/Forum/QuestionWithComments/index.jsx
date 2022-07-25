import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetQuestion } from "../../../services/GetQuestion";
import { GetComments } from "../../../services/GetComments";
import { sortByDate, sortByStars } from "../../../helpers/SortQuestionsByDate";
import { Question } from "../Question";
import { Comments } from "./Comments";
import { MakeComments } from "./MakeComments";
import { Container, ContentComments } from "./styles";

export const QuestionWithComments = () => {
   const { questionUid } = useParams();
   const [question, setQuestion] = useState({});
   const [comments, setComments] = useState([]);

   useEffect(() => {
      GetQuestion(questionUid).then((question) => setQuestion(question));
   }, []);

   useEffect(() => {
      GetComments(questionUid).then((comments) => {
         const sortComments = sortByDate(comments)
         const sortCommentsByStars = sortByStars(sortComments)
         setComments(sortCommentsByStars);
         console.log(sortComments);
      });
   }, []);

   return (
      <Container>
         <div>
            {Object.keys(question).length > 0 ? (
               <Question
                  title={question.title}
                  postDate={question.postDate}
                  content={question.content}
                  stars={question.stars}
                  userId={question.userId}
                  chatUid={question.chatUid}
                  isInQuestion={true}
               />
            ) : (
               ""
            )}
         </div>
         <hr style={{ backgroundColor: "#eaeaea" }} />
         <MakeComments data={question} comments={comments} setComments={setComments}/>
         <ContentComments>
            {comments.length > 0 ? (
               comments.map((comment) => {
                  const {
                     content,
                     stars,
                     postDate,
                     chatUid,
                     commentUid,
                     userId,
                  } = comment;
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
                  <p className="has-text-centered is-size-4">
                     Ainda não há respostas 😭
                  </p>
               </div>
            )}
         </ContentComments>
      </Container>
   );
};
