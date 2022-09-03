import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { CategoriesSelect } from "../../../assets/categories";
import { Storage } from "../../../services/Storage";
import { toast } from "react-toastify";
import { FiImage } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Form, ContentButtons, Button, ContentImages } from "./styles";
/* Classes */
import { Question } from "../../../services/Question";

export const MakeQuestions = () => {
   const [category, setCategory] = useState("");
   const [title, seTitle] = useState("");
   const [content, setContent] = useState("");
   const [image, setImage] = useState("");
   const [images, setImages] = useState([]);

   const handleAddImage = (event) => {
      event.preventDefault();
      toast.error("Essa funcionalidade não está disponível no momento.");
   };
   const handleSaveDraft = (event) => {
      event.preventDefault();
   };
   const handleSendQuestion = async (event) => {
      event.preventDefault();
      const storage = new Storage("uid");
      const userLogged = storage.GetItemSessionStorage();
      const questionUid = uuidv4();
      const postDate = moment().format("YYYY-MM-DD HH:mm");
      if (
         category === "" ||
         title === "" ||
         content === "" ||
         title === " " ||
         content === " "
      ) {
         toast.error("Preencha todos os campos");
      } else {
         if (questionUid) {
            const question = new Question(
               questionUid,
               category,
               title,
               content,
               postDate,
               userLogged
            );
            await question.RegisterQuestions();
            setCategory("");
            seTitle("");
            setContent("");
         } else {
            toast.error("Erro ao enviar pergunta");
         }
      }
   };

   return (
      <Form>
         <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">Escolha uma categoria</option>
            {CategoriesSelect.map((subject, key) => (
               <option key={key} value={subject.value}>
                  {subject.label}
               </option>
            ))}
         </select>
         <input
            type="text"
            placeholder="Digite um título"
            onChange={(e) => seTitle(e.target.value)}
            value={title}
         />
         <textarea
            placeholder="Digite sua pergunta"
            rows="20"
            onChange={(e) => setContent(e.target.value)}
            value={content}
         />

         {images.length > 0 && (
            <ContentImages>
               {images.map((image, key) => (
                  <img src={image} key={key} alt="Imagem de uma pergunta" />
               ))}
            </ContentImages>
         )}
         <ContentButtons>
            <input type="file" />
            <Button bgColor="23,131,255" opacity="0.8" onClick={handleAddImage}>
               <FiImage />
               Adicionar Imagem
            </Button>
            <div className="is-flex" style={{ gap: "1.25rem" }}>
               <Button
                  bgColor="234,234,234"
                  color="#808080"
                  onClick={handleSaveDraft}
               >
                  Salvar Rascunho
               </Button>
               <Button
                  bgColor="24,143,103"
                  opacity="0.5"
                  onClick={handleSendQuestion}
               >
                  <IoPaperPlaneOutline />
                  Publicar Questão
               </Button>
            </div>
         </ContentButtons>
      </Form>
   );
};
