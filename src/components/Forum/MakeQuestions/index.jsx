import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { CategoriesSelect } from "../../../assets/categories";
import { toast } from "react-toastify";
import { FiImage } from "react-icons/fi";
import { IoPaperPlaneOutline, IoClose } from "react-icons/io5";
import { Form, ContentButtons, Button, ContentImages, Label } from "./styles";
/* Classes */
import { Question } from "../../../services/Question";
import { Storage } from "../../../services/Storage";

export const MakeQuestions = () => {
   const [category, setCategory] = useState("");
   const [title, seTitle] = useState("");
   const [content, setContent] = useState("");
   const [image, setImage] = useState("");

   useEffect(() => {
      const storage = new Storage("draft");
      const data = JSON.parse(storage.GetItemLocalStorage());
    
      if (data) {
         seTitle(data.title);
         setContent(data.content);
         setCategory(data.category);
         setImage(data.image);
      }
   }, []);

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
            setImage(base64String);
         };
         reader.readAsDataURL(dataImage);
      } else {
         toast.error("Formato de imagem inválido");
      }
   };
   const handleSaveDraft = async (event) => {
      event.preventDefault();
      const storage = new Storage("draft");
      const draft = await storage.GetItemSessionStorage();

      if (category !== "" || title !== "" || content !== "") {
         const draft = new Storage("draft").GetItemLocalStorage();
         const data = { category, title, content, image };
         const json = JSON.stringify(data);
         const storage = new Storage("draft", json);
         await storage.SetItemLocalStorage();
         if (
            category !== draft.category &&
            content !== draft.content &&
            image !== draft.image
         ) {
            toast.success("Rascunho salvo com sucesso");
         } else {
            toast.success("Rascunho alterado com sucesso");
         }
      } else {
         toast.error("Preencha todos os campos");
      }
   };
   const handleSendQuestion = async (event) => {
      event.preventDefault();
      const storage = new Storage("uid");
      const draft = new Storage("draft");
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
               userLogged,
               image
            );
            await question.RegisterQuestions();
            await draft.RemoveItemLocalStorage();
            setCategory("");
            seTitle("");
            setContent("");
            setImage("");
         } else {
            toast.error("Erro ao enviar pergunta");
         }
      }
   };

   return (
      <Form>
         <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">Escolha uma disciplina</option>
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

         {image && (
            <ContentImages>
               <div>
                  <img src={image} alt="Imagem de uma pergunta" />
                  <span onClick={() => setImage("")}>
                     <IoClose />
                  </span>
               </div>
            </ContentImages>
         )}
         <ContentButtons>
            <input
               id="inputFile"
               type="file"
               onChange={(e) => {
                  setImage("");
                  handleAddImage(e.target.files[0]);
               }}
            />
            {image ? (
               <Label
                  bgColor="23,131,255"
                  opacity="0.8"
                  onClick={() => setImage("")}
               >
                  <FiImage />
                  Alterar imagem
               </Label>
            ) : (
               <Label htmlFor="inputFile" bgColor="23,131,255" opacity="0.8">
                  <FiImage />
                  Adicionar imagem
               </Label>
            )}

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
