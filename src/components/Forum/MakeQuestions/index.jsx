import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { CategoriesSelect } from "../../../assets/categories";
import { Storage } from "../../../services/Storage";
import { toast } from "react-toastify";
import { FiImage } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Form, ContentButtons, Button, ContentImages, Label } from "./styles";
/* Classes */
import { Question } from "../../../services/Question";

export const MakeQuestions = () => {
   const [category, setCategory] = useState("");
   const [title, seTitle] = useState("");
   const [content, setContent] = useState("");
   const [images, setImages] = useState([]);

   const handleAddImage = (dataImage) => {
      event.preventDefault();
      if (
         dataImage.type === "image/jpeg" ||
         dataImage.type === "image/png" ||
         dataImage.type === "image/jpg"
      ) {
         const reader = new FileReader();
         reader.onload = async () => {
            const base64String = await reader.result;
            setImages([...images, base64String]);
         };
         reader.readAsDataURL(dataImage);
      }else{
         toast.error("Formato de imagem inválido");
      }
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
            <input
               id="inputFile"
               type="file"
               onChange={(e) => handleAddImage(e.target.files[0])}
            />
            <Label htmlFor="inputFile" bgColor="23,131,255" opacity="0.8">
               <FiImage />
               Adicionar Imagem
            </Label>
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
