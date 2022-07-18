import { useState } from "react";
import { RegisterQuestions } from "../../../services/CreateQuestion";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { Categories } from "../../../assets/categories";
import { GetItemSessionStorage } from '../../../services/Storage'
import { toast } from "react-toastify";
import { FiImage } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Form, ContentButtons, Button } from "./styles";

export const MakeQuestions = () => {
   const [category, setCategory] = useState("");
   const [title, seTitle] = useState("");
   const [question, setQuestion] = useState("");


   const handleAddImage = (event) => {
      event.preventDefault();
      toast.error("Essa funcionalidade não está disponível no momento.");
   };
   const handleSaveDraft = (event) => {
      event.preventDefault();
   };
   const handleSendQuestion = (event) => {
      event.preventDefault();
      const chatUid = uuidv4();
      const postDate = moment().format("YYYY-MM-DD HH:mm");
      const userId = GetItemSessionStorage('uid')
      if(category === "" || title === "" || question === ""){
         toast.error('Preencha todos os campos');
      }else{
         if(userId){
            RegisterQuestions(
               chatUid,
               category,
               title,
               question,
               postDate,
               userId
            );
            setCategory("");
            seTitle("");
            setQuestion("");
         }else{
            toast.error('Erro ao enviar pergunta');
         }
      }
   };

   return (
      <Form>
         <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">Escolha uma categoria</option>
            {Categories.map((subject, key) => (
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
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
         />
         <ContentButtons>
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
