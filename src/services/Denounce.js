import emailjs from "@emailjs/browser";
import { GetUser } from "./GetInfoUser";
import { toast } from "react-toastify";

export class Denounce {
   constructor(
      userId,
      chatUid,
      commentUid,
      title,
      content,
      postDate,
      usernameSend
   ) {
      this.userId = userId;
      this.chatUid = chatUid;
      this.commentUid = commentUid;
      this.title = title;
      this.content = content;
      this.postDate = postDate;
      this.usernameSend = usernameSend;
   }

   async comment() {
      const userDenounce = await GetUser(this.userId);

      emailjs.init(import.meta.env.VITE_APP_USER_ID);
      const template_params = {
         commentUid: this.commentUid,
         usernameSend: this.usernameSend,
         date: this.postDate,
         content: this.content,
         username: userDenounce.username,
      };

      emailjs
         .send(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_COMMENT_TEMPLATE_ID,
            template_params
         )
         .then((result) =>
            toast.info(
               "Comentário denunciado, logo mais nossos administradores irão verificar!"
            )
         );
   }

   async question() {
      const userDenounce = await GetUser(this.userId);

      emailjs.init(import.meta.env.VITE_APP_USER_ID);
      const template_params = {
         questionUid: this.chatUid,
         usernameSend: this.usernameSend,
         date: this.postDate,
         title: this.title,
         content: this.content,
         username: userDenounce.username,
      };

      emailjs
         .send(
            import.meta.env.VITE_APP_SERVICE_ID,
            import.meta.env.VITE_APP_QUESTION_TEMPLATE_ID,
            template_params
         )
         .then((result) =>
            toast.info(
               "Questão denunciado, logo mais nossos administradores irão verificar!"
            )
         );
   }
}