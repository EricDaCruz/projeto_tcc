import { useState } from "react";
import { StyledModal, ContentAll } from "./styles";
import { Button } from "../Profile/styles";
import { IoClose } from 'react-icons/io5';

export const Modal = ({ deleteProfile }) => {
   const [modalIsOpen, setIsOpen] = useState(false);

   function openAndCloseModal() {
      setIsOpen(!modalIsOpen);
   }

   return (
      <div>
         <Button delete={true} onClick={openAndCloseModal}>
            Deletar Perfil
         </Button>
         {modalIsOpen && (
            <ContentAll >
               <StyledModal>
                  <div className="header">
                     <IoClose onClick={openAndCloseModal}/>
                  </div>
                  <div className="content">
                     <h2>Tem certeza que deseja deletar seu perfil?</h2>
                     <p>Caso você realmente queira excluir seu perfil, você não terá mais acesso a perguntas e respostas feita no site, e seus dados serão deletados do nosso sistema</p>
                  </div>
                  <div className="actions">
                     <Button delete={true} onClick={openAndCloseModal}>Cancelar</Button>
                     <Button onClick={()=>{deleteProfile();openAndCloseModal()}}>
                        Excluir Perfil
                     </Button>
                  </div>
               </StyledModal>
            </ContentAll>
         )}
      </div>
   );
};
