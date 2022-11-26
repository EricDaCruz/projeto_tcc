import { useState } from "react";
import { StyledModal } from "./styles";
import { Button } from "../Profile/styles";
import { ChoiceModal } from "./ChoiceModal";

export const Modal = ({ deleteProfile, setModalIsOpen }) => {
   const [choice, setChoice] = useState("no");

   function CloseModal() {
      setModalIsOpen(false);
   }

   const handleDeleteProfile = () => {
      if (choice === "yes") {
         deleteProfile();
      } else {
         CloseModal();
      }
   }

   return (
      <div>
               <StyledModal>
                  <div>
                     <h1>Deletar Conta</h1>
                     <div>
                        <h2>Tem certeza que deseja excluir a conta?</h2>
                        <p>Vamos sentir sua falta!</p>
                     </div>
                     <div className="choices">
                        <ChoiceModal
                           type={"no"}
                           choice={choice}
                           setChoice={setChoice}
                        />
                        <ChoiceModal
                           type={"yes"}
                           choice={choice}
                           setChoice={setChoice}
                        />
                     </div>
                     <div className="content-btn">
                        <button onClick={handleDeleteProfile}>Confirmar</button>
                     </div>
                  </div>
               </StyledModal>
      </div>
   );
};
