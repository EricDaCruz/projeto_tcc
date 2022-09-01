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
import {useComments} from '../../../contexts/CommentsContext'
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

   const deleteQuestion = () => {
      const question = new Question(questionUid)
      question.DeleteQuestion(questionUid).then(() => {
         toast.success("Pergunta deletada com sucesso!");
      })
   };
   const denounceQuestion = async () => {
      const question = new Question(questionUid,"",title,content,postDate,userIdSend);
      await question.DenounceQuestion(usernameSendQuestion)
   };

   const deleteComment = () => {
      console.log(comments);
      const newComments = comments.filter((comment) => comment.uid !== commentUid);
      console.log(newComments);
      // const comment = new Comment(commentUid)
      // comment.DeleteComment().then(
      //    toast.success("Comentário deletado com sucesso!")
      // );
      // DeleteComments(commentUid)
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
            {userIdSend === userLogged && (
               <Button
                  action="true"
                  onClick={isQuestion ? deleteQuestion : deleteComment}
               >
                  <BsTrashFill /> Deletar{" "}
                  {isQuestion ? "Questão" : "Comentário"}
               </Button>
            )}
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
