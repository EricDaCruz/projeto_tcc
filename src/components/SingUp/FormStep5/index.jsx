import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { ProgressStepBar } from "../ProgressStepBar";
import { Buttons } from "../Buttons";
import { ContentForm } from "./styles";
import { SelectPhoto } from '../SelectPhoto'

export function FormStep5() {
   const navigate = useNavigate();
   const urlPhoto = "https://github.com/EricDaCruz/projeto_tcc/blob/main/src/assets/images/profile-pictures/"
   const { data, setData } = useForm();
   const profiles = [
      "https://github.com/EricDaCruz/projeto_tcc/blob/main/src/assets/images/profile-pictures/perfil-amarelo.png?raw=true",
      urlPhoto + "perfil-azul.png?raw=true",
      urlPhoto + "perfil-laranja.png?raw=true",
      urlPhoto + "perfil-rosa_escuro.png?raw=true",
      urlPhoto + "perfil-rosa.png?raw=true",
      urlPhoto + "perfil-roxo.png?raw=true",
   ]

   const [photoSelect, setPhotoSelect] = useState("")
   
   useEffect(() => {
      setData({ ...data, currentStep: 5 });
      if(data.email === ""){
         navigate('/sing-up/step1')
      }
   }, []);

   const handleNextStep = () => {
      if(photoSelect){
         setData({ ...data, photoUrl: photoSelect });
         navigate(`/sing-up/step${data.currentStep + 1}`);
      }else{
         toast.error("Por favor, selecione uma foto")
      }
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
                     <SelectPhoto key={key} src={profile} onClick={setPhotoSelect} photoSelect={photoSelect}/>
                  ))
               }
            </div>
         </ContentForm>
         <Buttons
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
            textNextStep="Próxima Etapa"
         />
      </div>
   );
}

