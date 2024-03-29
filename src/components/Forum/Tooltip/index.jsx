import { Storage } from "../../../services/Storage";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import {
   BsThreeDotsVertical,
   BsTrashFill,
   BsExclamationTriangleFill,
} from "react-icons/bs";
import { Container, Button } from "./styles";
import { useComments } from '../../../contexts/CommentsContext'
import { useQuestions } from '../../../contexts/QuestionsContext'
/* Classes */
import { Question } from "../../../services/Question";
import { Comment } from "../../../services/Comment";

export const Tooltip = ({
   usernameSendQuestion,
   usernameSendComment,
   questionUid,
   commentUid,
   content,
   postDate,
   userIdSend,
   title,
   isQuestion,
}) => {
   const storage = new Storage("uid")
   const userLogged = storage.GetItemSessionStorage();
   const navigate = useNavigate();
   const location = useLocation();
   const {comments, setComments} = useComments()
   const {questions, setQuestions} = useQuestions()

   const deleteQuestion = () => {
      //Deletando da tela
      const newQuestions = questions.filter((question) => question.questionUid !== questionUid)
      setQuestions(newQuestions)
      //Deletando do banco
      const question = new Question(questionUid,"","","","",userIdSend)
      question.DeleteQuestion(questionUid).then(() => {
         toast.success("Pergunta deletada com sucesso!");
      })
   };
   const denounceQuestion = async () => {
      const question = new Question(questionUid,"",title,content,postDate,userIdSend);
      await question.DenounceQuestion(usernameSendQuestion)
   };

   const deleteComment = () => {
      //Deletando da tela
      const newComments = comments.filter((comment) => commentUid !== comment.commentUid );
      setComments(newComments);
      //Deletando do banco
      const comment = new Comment(commentUid, "",userIdSend)
      comment.DeleteComment().then(
         toast.success("Comentário deletado com sucesso!")
      );
   };
   const denounceComment = async () => {  
      const dataComment ={
         content: content,
         postDate: postDate,
      }
      const comment = new Comment(commentUid,"",userIdSend,dataComment);
      await comment.DenounceComment(usernameSendComment)
   };

   return (
      <Popup
         trigger={(open) => (
            <Button>
               <BsThreeDotsVertical />
            </Button>
         )}
         position="left top"
         closeOnDocumentClick
      >
         <Container>
            { userLogged === userIdSend || userLogged === 'ut8WCJp85KYpEtAFjoJyRQMiq4t2' ? (
               <Button
                  action="true"
                  onClick={isQuestion ? deleteQuestion : deleteComment}
               >
                  <BsTrashFill /> Deletar{" "}
                  {isQuestion ? "Questão" : "Comentário"}
               </Button>
            )
            : (
               <></>
            ) }
            <Button
               action="true"
               onClick={isQuestion ? denounceQuestion : denounceComment}
            >
               <BsExclamationTriangleFill /> Denunciar{" "}
               {isQuestion ? "Questão" : "Comentário"}
            </Button>
            {location.pathname === "/forum/my-answer" && (
               <Button
                  action="true"
                  onClick={() => navigate(`/forum/question/${questionUid}`)}
               >
                  <BsExclamationTriangleFill /> Ir para a questão
               </Button>
            )}
         </Container>
      </Popup>
   );
};
