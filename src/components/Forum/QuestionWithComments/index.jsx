import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Questions } from "../Questions";
import { Comments } from "./Comments";
import { MakeComments } from "./MakeComments";
import { LoaderQuestion } from "../../LoaderQuestion";
import { Container, ContentComments } from "./styles";
import { useComments } from "../../../contexts/CommentsContext";
/* Classes */
import { Question } from "../../../services/Question";
import { Comment } from "../../../services/Comment";

export const QuestionWithComments = () => {
   const { questionUid } = useParams();
   const [questionData, setQuestionData] = useState(null);
   const { comments, setComments } = useComments();
   const [isLoadingQuestion, setIsLoadingQuestion] = useState(true);
   const [isLoadingComments, setIsLoadingComments] = useState(false);

   useEffect(() => {
      const question = new Question(questionUid);
      question.GetQuestionByUid().then((quest) => {
         setQuestionData(quest);
         setIsLoadingQuestion(false);
      });
   }, []);

   useEffect(() => {
      const comment = new Comment("", questionUid);
      comment.GetComments().then((comments) => {
         setComments(comments);
      });
      comments && setIsLoadingComments(true);
   }, []);

   return (
      <Container>
         <div>
            {!isLoadingQuestion ? (
               questionData !== null ? (
                  <Questions
                     key={questionData.questionUid}
                     title={questionData.title}
                     postDate={questionData.postDate}
                     content={questionData.content}
                     stars={questionData.stars}
                     userId={questionData.userId}
                     questionUid={questionData.questionUid}
                     image={questionData.image}
                     commentsLength={comments.length}
                     isInQuestion={true}
                  />
               ) : (
                  <div className="is-flex is-align-items-center is-flex-direction-column">
                     <h1 className="is-size-4 has-text-centered">Essa pergunta não existe 😕</h1>
                     <p className=" mt-3 is-size-5 has-text-centered">Ela pode ter sido excluída pelo autor, ou removida por ferir as diretrizes da comunidade.</p>
                     <Link to="/forum/chats" className="button mt-5 is-size-5 has-text-white" style={{ backgroundColor:'#1da87a', border:'none'}}>
                        Voltar para o fórum
                     </Link>
                  </div>
               )
            ) : (
               <LoaderQuestion />
            )}
         </div>
         {questionData !== null && (
            <>
               <hr style={{ backgroundColor: "#eaeaea" }} />
               <MakeComments
                  data={questionData}
                  comments={comments}
                  setComments={setComments}
               />
               <ContentComments>
                  {isLoadingComments ? (
                     comments.length > 0 ? (
                        comments.map((comment) => {
                           const {
                              content,
                              stars,
                              postDate,
                              questionUid,
                              commentUid,
                              userId,
                           } = comment;
                           return (
                              <Comments
                                 key={commentUid}
                                 content={content}
                                 stars={stars}
                                 postDate={postDate}
                                 questionUid={questionUid}
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
                     )
                  ) : (
                     <LoaderQuestion />
                  )}
               </ContentComments>
            </>
         )}
      </Container>
   );
};
