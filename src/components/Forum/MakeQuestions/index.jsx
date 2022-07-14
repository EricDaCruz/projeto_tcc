import { Form, ContentButtons, Button } from "./styles";
import { FiImage } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useState } from "react";

/* */
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { RegisterQuestions } from "../../../services/CreateQuestion";
import { v4 as uuidv4 } from "uuid";
import { FormatDateForQuestion } from "../../../helpers/FormatDate";

export const MakeQuestions = () => {
   const categories = [
      "Matemática",
      "Português",
      "Geografia",
      "Biologia",
      "Física",
      "Química",
      "Desenvolvimento de Sistemas",
      "Meio Ambiente",
   ];

   const [category, setCategory] = useState("");
   const [title, seTitle] = useState("");
   const [question, setQuestion] = useState("");

   const handleAddImage = (event) => {
      event.preventDefault();
   };
   const handleSaveDraft = (event) => {
      event.preventDefault();
   };
   const handleSendQuestion = (event) => {
      event.preventDefault();
      const chatUid = uuidv4();
      const postDate = FormatDateForQuestion();
      RegisterQuestions(
         chatUid,
         category,
         title,
         question,
         postDate,
         "gO5ouFBkhHRvE2954VioeCqD5hj1"
      );
      setCategory("");
      seTitle("");
      setQuestion("");
   };

   return (
      <Form>
         <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">Escolha uma categoria</option>
            {categories.map((subject, key) => (
               <option key={key} value={subject}>
                  {subject}
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
