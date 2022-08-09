import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Questions } from "../Questions";
import { Comments } from "./Comments";
import { MakeComments } from "./MakeComments";
import { LoaderQuestion } from '../../LoaderQuestion'
import { Container, ContentComments } from "./styles";
/* Classes */
import { Question } from "../../../services/Question";
import { Comment } from "../../../services/Comment";

export const QuestionWithComments = () => {
   const { questionUid } = useParams();
   const [questionData, setQuestionData] = useState({});
   const [comments, setComments] = useState([]);
   const [isLoadingQuestion, setIsLoadingQuestion] = useState(false)
   const [isLoadingComments, setIsLoadingComments] = useState(false)

   useEffect(() => {
      const question = new Question(questionUid);
      question.GetQuestionByUid().then((quest) => {setQuestionData(quest)})
      questionData && setIsLoadingQuestion(true)
   }, []);

   useEffect(() => {
      const comment = new Comment("",questionUid);
      comment.GetComments().then((comments) => {setComments(comments)})
      comments && setIsLoadingComments(true)
   }, []);

   return (
      <Container>
         <div>
            {
               isLoadingQuestion ? (
                  Object.keys(questionData).length > 0 && (
                        <Questions
                           key={questionData.questionUid}
                           title={questionData.title}
                           postDate={questionData.postDate}
                           content={questionData.content}
                           stars={questionData.stars}
                           userId={questionData.userId}
                           questionUid={questionData.questionUid}
                           commentsLength={comments.length}
                           isInQuestion={true}
                        />
                     )
               ):(
                  <LoaderQuestion />
               )
            }
         </div>
         <hr style={{ backgroundColor: "#eaeaea" }} />
         <MakeComments data={questionData} comments={comments} setComments={setComments}/>
         <ContentComments>
            {
               isLoadingComments ? (
                  comments.length > 0 ? (
                     comments.map((comment) => {
                        const {
                           content,
                           stars,
                           postDate,
                           questionUid,
                           commentUid,
                           userId,
                        } = comment
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
               ):(
                  <LoaderQuestion />
               )
            }
         </ContentComments>
      </Container>
   );
};
