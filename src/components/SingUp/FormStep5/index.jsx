import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { ProgressStepBar } from "../ProgressStepBar";
import { NextStep } from "../Buttons/NextStep";
import { PreviousStep } from "../Buttons/PreviousStep";
import { ContentForm, Inputs } from "./styles";
import { Field } from "../Field";
import { SelectPhoto } from '../SelectPhoto'

export function FormStep5() {
   const navigate = useNavigate();
   const { data, setData } = useForm();
   const profiles = [
      "https://t3.ftcdn.net/jpg/04/07/34/84/360_F_407348423_b6vEXZoW4nmoLvrtc0tJ0TrSTO7jChSd.jpg",
      "https://i.pinimg.com/736x/c2/30/d8/c230d88708195607ccd60d0b696d94f3.jpg",
      "https://static.vecteezy.com/system/resources/previews/005/056/035/original/design-of-cute-alien-wearing-black-glasses-vector.jpg",
      "https://i.pinimg.com/736x/e6/4c/69/e64c69da1aeb437150db1100767a052b.jpg",
      "https://cdn3.vectorstock.com/i/1000x1000/00/97/design-cute-alien-king-hug-moon-vector-36660097.jpg",
      "https://cdn3.vectorstock.com/i/1000x1000/00/97/design-cute-alien-king-hug-moon-vector-36660097.jpg"
   ]

   const [photoSelect, setphotoSlect] = useState()
   

   useEffect(() => {
      setData({ ...data, currentStep: 5 });
      if(data.email === ""){
         navigate('/sing-up/step1')
      }
   }, []);

   const handleNextStep = () => {
      navigate(`/sing-up/step${data.currentStep + 1}`)
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
               A foto que você escolher, será exibida para outros usuários. Ela poderá ser alterada posteriormente.
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>
               <ProgressStepBar currentStep={data.currentStep} />
            </div>
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Foto de Perfil
               </h2>
               <p className="is-size-6 has-text-centered">
                  Escolha seu etzinho favorito...
               </p>
            </div>
            <div className="is-flex is-flex-wrap-wrap is-justify-content-center" style={{gap:'2rem'}}>
               {
                  profiles.map((profile, key)=>(
                     <SelectPhoto key={key} src={profile} />
                  ))
               }
            </div>
         </ContentForm>
         <div className="is-flex is-justify-content-space-between mt-6">
            <PreviousStep onClick={handlePreviousStep} />
            <NextStep text="Próxima Etapa" onClick={handleNextStep} />
         </div>
      </div>
   );
}

