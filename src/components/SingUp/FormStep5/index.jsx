import { ContentForm, Inputs } from "./styles";
import { BiUser } from "react-icons/bi";
import { ProgressStepBar } from "../ProgressStepBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { NextStep } from "../Buttons/NextStep";
import { PreviousStep } from "../Buttons/PreviousStep";
import { toast } from 'react-toastify'
import { Field } from "../Field";
/*Validação*/
import validator from 'validator'

export function FormStep5() {
   const navigate = useNavigate();
   const { data, setData } = useForm();
   

   useEffect(() => {
      setData({ ...data, currentStep: 5 });
      if(data.interests === ""){
         navigate('/sing-up/step1')
      }
   }, []);

   const handleNextStep = () => {
      
      }
   const handlePreviousStep = () => {
      if (data.currentStep === 1) {
         navigate("/");
      } else {
         navigate(`/sing-up/step${data.currentStep - 1}`);
      }
   };

   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark has-text-centered	">
              Selecione uma foto de perfil temporária de sua preferência, {data.name}!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Os dados que você inserir agora, serão os que você deve utilizar
               para acessar sua conta, vamos lá.
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>
               <ProgressStepBar currentStep={data.currentStep} />
            </div>
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Dados cadastrais
               </h2>
               <p className="is-size-6 has-text-centered">
                  Dica de ouro: anote seu nome de usuário e sua senha de acesso
                  para não esquece-la.
               </p>
            </div>
            <form>
               
            </form>
         </ContentForm>
         <div className="is-flex is-justify-content-space-between mt-6">
            <PreviousStep onClick={handlePreviousStep} />
            <NextStep text="Próxima Etapa" onClick={handleNextStep} />
         </div>
      </div>
   );
}

