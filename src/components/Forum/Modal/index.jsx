import { useState } from "react";
import { StyledModal, ContentAll } from "./styles";
import { Button } from "../Profile/styles";
import { IoClose } from "react-icons/io5";
import { ChoiceModal } from "./ChoiceModal";

export const Modal = ({ deleteProfile, height }) => {
   const [modalIsOpen, setIsOpen] = useState(false);
   const [choice, setChoice] = useState("no");

   function openAndCloseModal() {
      setIsOpen(!modalIsOpen);
   }

   const handleDeleteProfile = () => {
      if (choice === "yes") {
         deleteProfile();
      } else {
         openAndCloseModal();
      }
   }

   return (
      <div>
         <Button delete={true} onClick={openAndCloseModal}>
            Deletar Perfil
         </Button>
         {modalIsOpen && (
            <ContentAll height={height}>
               <StyledModal>
                  <div>
                     <h1>Deletar Conta</h1>
                     <div>
                        <h2>Tem certeza que deseja excluir a conta?</h2>
                        <p>Vamos sentir sua falta!</p>
                     </div>
                     <div className="choice">
                        <ChoiceModal
                           type={"yes"}
                           choice={choice}
                           setChoice={setChoice}
                        />
                        <ChoiceModal
                           type={"no"}
                           choice={choice}
                           setChoice={setChoice}
                        />
                     </div>
                     <div className="content-btn">
                        <button onClick={handleDeleteProfile}>Confirmar</button>
                     </div>
                  </div>
               </StyledModal>
            </ContentAll>
         )}
      </div>
   );
};
