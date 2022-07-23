import { DeleteQuestion } from "../../../services/DeleteInfo";
import { GetItemSessionStorage } from "../../../services/Storage";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import {
   BsThreeDotsVertical,
   BsTrashFill,
   BsExclamationTriangleFill,
} from "react-icons/bs";
import { Container, Button } from "./styles";

export const Tooltip = ({ userIdSend, chatUid }) => {
   const userId = GetItemSessionStorage("uid");

   const deleteQuestion = () => {
    DeleteQuestion(chatUid).then(toast.success("Pergunta deletada com sucesso!"));
   };
   const denounceQuestion = () => {
      console.log("Denunciar");
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
               <Button action="true" onClick={deleteQuestion}>
                  <BsTrashFill /> Deletar Questão
               </Button>
            )}
            <Button action="true" onClick={denounceQuestion}>
               <BsExclamationTriangleFill /> Denunciar Questão
            </Button>
         </Container>
      </Popup>
   );
};
