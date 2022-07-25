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

import emailjs from "@emailjs/browser";

export const Tooltip = ({ usernameSend, chatUid, commentUid, content, postDate, userIdSend }) => {
   const userId = GetItemSessionStorage("uid");

   const deleteQuestion = () => {
      DeleteQuestions(chatUid).then(
         toast.success("Pergunta deletada com sucesso!")
      );
   };
   const denounceQuestion = () => {
      console.log("Denunciar Pergunta");
   };

   const deleteComment = () => {
      DeleteComments(commentUid).then(
         toast.success("Comentário deletado com sucesso!")
      );
   };
   const denounceComment = async () => {
      const userDenounce = await GetUser(userId);

      emailjs.init(import.meta.env.VITE_APP_USER_ID);
      const template_params = {
         commentUid: commentUid,
         usernameSend: usernameSend,
         date: postDate,
         content: content,
         username: userDenounce.username,
      };

      emailjs
         .send(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_COMMENT_TEMPLATE_ID,
            template_params
         )
         .then((result) => toast.info("Comentário denunciado, logo mais nossos administradores iram verificar!"));
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
