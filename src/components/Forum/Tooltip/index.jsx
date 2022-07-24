import { DeleteQuestions, DeleteComments } from "../../../services/DeleteInfo";
import { GetItemSessionStorage } from "../../../services/Storage";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import {
   BsThreeDotsVertical,
   BsTrashFill,
   BsExclamationTriangleFill,
} from "react-icons/bs";
import { Container, Button } from "./styles";

export const Tooltip = ({ userIdSend, chatUid, commentUid }) => {
   const userId = GetItemSessionStorage("uid");

   const deleteQuestion = () => {
    DeleteQuestions(chatUid).then(toast.success("Pergunta deletada com sucesso!"));
   };
   const denounceQuestion = () => {
      console.log("Denunciar Pergunta");
   };

   const deleteComment = () => {
      DeleteComments(commentUid).then(toast.success("Comentário deletado com sucesso!"))
   };
   const denounceComment = () => {
      console.log("Denunciar Comentário");
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
            {userIdSend === userId && (
               <Button action="true" onClick={chatUid ? deleteQuestion : deleteComment}>
                  <BsTrashFill /> Deletar {chatUid ? "Questão" : "Comentário"}
               </Button>
            )}
            <Button action="true" onClick={chatUid ? denounceQuestion : denounceComment}>
               <BsExclamationTriangleFill /> Denunciar {chatUid ? "Questão" : "Comentário"}
            </Button>
         </Container>
      </Popup>
   );
};
