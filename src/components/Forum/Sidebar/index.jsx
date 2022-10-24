import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { BiPurchaseTag, BiAward, BiSearch } from "react-icons/bi";
import Modal from "react-modal";
import {
   RiQuestionLine,
   RiChat3Line,
   RiStarLine,
   RiLogoutBoxLine,
} from "react-icons/ri";
import { Aside, ContentModal, Section, ContentItens } from "./styles";
/* Classes */
import { User } from "../../../services/User";
import { ChoiceModal } from "../Modal/ChoiceModal";

const modalStyles = {
   overlay: {
      backgroundColor: "rgba(45,43,43,0.5)",
      zIndex: 1000,
   },
   content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "2rem",
      border: "1px solid #eff0f7",
      maxWidth: "43rem",
      width: "100%",
      boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
   },
};

export function Sidebar() {
   const navigate = useNavigate();
   const location = useLocation();
   const sibebarMenuItens = [
      {
         path: "subjects",
         name: "Disciplinas",
         icon: <BiPurchaseTag />,
      },
      {
         path: "ranking",
         name: "Ranking",
         icon: <BiAward />,
      },
   ];
   const sidebarProfileItens = [
      {
         path: "my-questions",
         name: "Minhas Questões",
         icon: <RiQuestionLine />,
         function: "navigateToMyQuestions",
      },
      {
         path: "my-answer",
         name: "Minhas Respostas",
         icon: <RiChat3Line />,
         function: "navigateToMyAnswer",
      },
      {
         path: "favorite-questions",
         name: "Dúvidas Favoritadas",
         icon: <RiStarLine />,
         function: "navigateToFavoritesQuestions",
      },
      {
         path: "",
         name: "Desconectar",
         icon: <RiLogoutBoxLine />,
         function: "logout",
      },
   ];
   const [selectItems, setSelectItems] = useState("");
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [choiceModal, setChoiceModal] = useState("no");

   useEffect(() => {
      const pathName = location.pathname;
      const pathNameSplit = pathName.split("/");
      const lastPath = pathNameSplit[pathNameSplit.length - 1];

      switch (lastPath) {
         case "subjects":
         case pathNameSplit.includes("subjects") ? lastPath : "":
            setSelectItems("subjects");
            break;
         case "ranking":
            setSelectItems("ranking");
            break;
         case "my-questions":
            setSelectItems("my-questions");
            break;
         case "my-answer":
            setSelectItems("my-answer");
            break;
         case "favorite-questions":
            setSelectItems("favorite-questions");
            break;
         default:
            setSelectItems(false);
            break;
      }
   }, [location]);

   const handleNavigateRoutes = async (item) => {
      switch (item) {
         case "subjects":
            navigate(item);
            break;
         case "ranking":
            navigate(item);
            break;
         case "my-questions":
            navigate(item);
            break;
         case "my-answer":
            navigate(item);
            break;
         case "favorite-questions":
            navigate(item);
            break;
         default:
            const user = new User("");
            user.SignOutUser().then(() => {
               toast.success("Usuário Deslogado");
               navigate("/");
            });
            break;
      }
   };

   const handleExitAccount = (path) => {
      if(choiceModal === "no") {
         setModalIsOpen(false);
      }else {
         handleNavigateRoutes("")
      }
   }

   return (
      <Aside>
         <Section>
            <p>Menu</p>
            {sibebarMenuItens.map((item, key) => (
               <ContentItens
                  onClick={() => handleNavigateRoutes(item.path)}
                  key={key}
                  selected={selectItems === item.path ? true : false}
               >
                  {item.icon}
                  <span>{item.name}</span>
               </ContentItens>
            ))}
         </Section>
         <Section>
            <p>Perfil</p>
            {sidebarProfileItens.map((item, key) => (
               <ContentItens
                  onClick={
                     item.path === ""
                        ? () => {
                             setModalIsOpen(true);
                          }
                        : () => handleNavigateRoutes(item.path)
                  }
                  key={key}
                  selected={selectItems === item.path ? true : false}
               >
                  {item.icon}
                  <span>{item.name}</span>
               </ContentItens>
            ))}
         </Section>
         <Modal isOpen={modalIsOpen} style={modalStyles}>
            <ContentModal>
               <h1>Certeza que quer sair da sua conta?</h1>
               <p>Caso saia não se esqueça de voltar aqui, sentiremos saudades...</p>
               <div className="choices">
                  <ChoiceModal
                     type={"no"}
                     choice={choiceModal}
                     setChoice={setChoiceModal}
                  />
                  <ChoiceModal
                     type={"yes"}
                     choice={choiceModal}
                     setChoice={setChoiceModal}
                  />
               </div>
               <div className="content-btn">
                  <button onClick={handleExitAccount}>Confirmar</button>
               </div>
            </ContentModal>
         </Modal>
      </Aside>
   );
}
