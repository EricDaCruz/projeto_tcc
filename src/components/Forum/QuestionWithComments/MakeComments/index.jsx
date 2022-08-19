import { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { Storage } from "../../../../services/Storage";
import { toast } from "react-toastify";
import { ContentMakeComments } from "./styles";
/* Classes */
import { Comment } from '../../../../services/Comment'

export const MakeComments = ({ comments, setComments, data }) => {
   const [answer, setAnswer] = useState("");
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();

   const handleSendAnswer = async (e) => {
      e.preventDefault();
      const uid = uuidv4();
      const { questionUid } = data;
      if (answer === "" || answer === " " ) {
         toast.error("Por favor, preencha o campo de comentário.");
      } else {
         const comment = new Comment("",questionUid, userLogged, {answer});
         await comment.RegisterComments(uid)
         setAnswer("");
         const commentSend = [
            {
               commentUid: uid,
               content: answer,
               stars: [],
               postDate: moment().format("YYYY-MM-DD HH:mm"),
               questionUid,
               userId: userLogged,
            },...comments
         ];
         setComments(commentSend);
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
