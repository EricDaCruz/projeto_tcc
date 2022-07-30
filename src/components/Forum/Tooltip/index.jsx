import { DeleteQuestions, DeleteComments } from "../../../services/DeleteInfo";
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
/* Classes */
import { Question } from "../../../services/Question";
import { Denounce } from "../../../services/Denounce";

export const Tooltip = ({
   usernameSendQuestion,
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

   const deleteQuestion = () => {
      DeleteQuestions(questionUid).then(
         toast.success("Pergunta deletada com sucesso!")
      );
   };
   const denounceQuestion = async () => {
      const question = new Question(questionUid,"",title,content,postDate,userIdSend);
      await question.DenounceQuestion(usernameSendQuestion)
      // const denounce = new Denounce(
      //    userLogged,
      //    questionUid,
      //    "",
      //    title,
      //    content,
      //    postDate,
      //    usernameSendQuestion
      // );

      // denounce.question();
   };

   const deleteComment = () => {
      DeleteComments(commentUid).then(
         toast.success("Comentário deletado com sucesso!")
      );
   };
   const denounceComment = async () => {
      const denounce = new Denounce(
         userLogged,
         "",
         commentUid,
         "",
         content,
         postDate,
         usernameSend
      );

      denounce.comment();
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
