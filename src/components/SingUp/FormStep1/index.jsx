import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { ContentForm, Inputs } from "./styles";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { ProgressStepBar } from "../ProgressStepBar";
import {Field} from '../Field'
import { NextStep } from "../Buttons/NextStep";
import { PreviousStep } from "../Buttons/PreviousStep";

export function FormStep1() {
   const navigate = useNavigate();
   const { data, setData } = useForm();

   const [inputName, setInputName] = useState(data.name);
   const [inputUsername, setInptuUsername] = useState(data.username);

   useEffect(() => {
      setData({ ...data, currentStep: 1 });
   }, []);

   const handleNextStep = () => {
      if (inputName === "" || inputUsername === "") {
         toast.error("Por favor, preencha todos os campo"); 
      } else {
         setData({ ...data, name: inputName, username: inputUsername });
         console.log(data.name);
         navigate(`/sing-up/step${data.currentStep + 1}`);
      }
   };
   const handlePreviousStep = () => {
      if(data.currentStep === 1){
         navigate('/')
      }else{
         navigate(`/sing-up/step${data.currentStep - 1}`);
      }
   }

   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark has-text-centered	">
               Seja bem-vindo à HETEC!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Eu me chamo Etevaldo, e vou ajuda-lo a se cadastrar no melhor
               fórum tira dúvidas do mundo!
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <ProgressStepBar currentStep={data.currentStep} />
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Quem é você?
               </h2>
               <p className="is-size-6 has-text-centered">
                  Para começar, por favor me diga seu nome e email!
               </p>
            </div>
            <form className="columns is-flex-wrap-wrap">
               <Field className="column is-full mb-4" label="Nome">
                  <div className="is-flex is-align-items-center control has-icons-right">
                     <Inputs
                        className="input is-rounded is-medium"
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => setInputName(e.target.value)}
                        value={inputName}
                     />
                     <span className="icon is-small is-right">
                        <BiUser style={{ color: "#A0A3BD" }} />
                     </span>
                  </div>
               </Field>
               <Field className="column is-full mb-4" label='Nome de usuário'>
                  <div className="control has-icons-right">
                     <Inputs
                           className="input is-medium is-rounded"
                           type="text"
                           placeholder="Seu nome de usuário"
                           value={inputUsername}
                           onChange={e => setInptuUsername(e.target.value)}
                        />
                        <span className="icon is-small is-right">
                           <BiUser style={{color:'#A0A3BD'}}/>
                        </span>
                  </div>
               </Field>
            </form>
         </ContentForm>
         <div className="is-flex is-justify-content-space-between mt-6">
            <PreviousStep onClick={handlePreviousStep}/>
            <NextStep text="Próxima Etapa" onClick={handleNextStep}/>
         </div>
      </div>
   );
}
