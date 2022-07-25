import { DeleteQuestions, DeleteComments } from "../../../services/DeleteInfo";
import { GetUser } from "../../../services/GetInfoUser";
import { GetItemSessionStorage } from "../../../services/Storage";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import {
   BsThreeDotsVertical,
   BsTrashFill,
   BsExclamationTriangleFill,
} from "react-icons/bs";
import { Container, Button } from "./styles";

import { Denounce } from '../../../services/Denounce';

export const Tooltip = ({ usernameSend, chatUid, commentUid, content, postDate, userIdSend, title }) => {
   const userId = GetItemSessionStorage("uid");

   const deleteQuestion = () => {
      DeleteQuestions(chatUid).then(
         toast.success("Pergunta deletada com sucesso!")
      );
   };
   const denounceQuestion = async () => {
      const denounce = new Denounce(userId, chatUid, "", title, content, postDate, usernameSend);

      denounce.question()
   };

   const deleteComment = () => {
      DeleteComments(commentUid).then(
         toast.success("Comentário deletado com sucesso!")
      );
   };
   const denounceComment = async () => {
      const denounce = new Denounce(userId, "", commentUid, "", content, postDate, usernameSend);

      denounce.comment()
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
               <Button
                  action="true"
                  onClick={chatUid ? deleteQuestion : deleteComment}
               >
                  <BsTrashFill /> Deletar {chatUid ? "Questão" : "Comentário"}
               </Button>
            )}
            <Button
               action="true"
               onClick={chatUid ? denounceQuestion : denounceComment}
            >
               <BsExclamationTriangleFill /> Denunciar{" "}
               {chatUid ? "Questão" : "Comentário"}
            </Button>
         </Container>
      </Popup>
   );
};
