import { useState } from "react";
import { CreateComments } from "../../../../services/CreateComments";
import moment from "moment";
import { GetItemSessionStorage } from "../../../../services/Storage";
import { toast } from "react-toastify";
import { ContentMakeComments } from "./styles";

export const MakeComments = ({ comments, setComments, data }) => {
   const [answer, setAnswer] = useState("");

   const handleSendAnswer = async (e) => {
      e.preventDefault();
      const userId = GetItemSessionStorage("uid");
      if (answer) {
         const { chatUid } = data;
         await CreateComments(chatUid, userId, answer);
         setAnswer("");
         const comment = [
            {
               content: answer,
               stars: [],
               postDate: moment().format("YYYY-MM-DD HH:mm"),
               chatUid,
               userId,
            },...comments
         ];
         setComments(comment);
      } else {
         toast.error("Por favor, preencha o campo de comentário.");
      }
   };

   return (
      <ContentMakeComments>
         <form>
            <textarea
               rows="8"
               placeholder="Escreva sua resposta..."
               onChange={(e) => setAnswer(e.target.value)}
               value={answer}
            />
            <div className="is-flex is-justify-content-flex-end">
               <button onClick={handleSendAnswer}>Publicar Resposta</button>
            </div>
         </form>
      </ContentMakeComments>
   );
};
