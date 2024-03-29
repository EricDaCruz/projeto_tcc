import { ContentForm, ContentOptions } from "./styles";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../SelectOption";
import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { ProgressStepBar } from "../ProgressStepBar";
import { Buttons } from "../Buttons";
import { toast } from 'react-toastify'
/*Images*/
import Ds from "../../../assets/images/ds.png";
import Tdi from "../../../assets/images/tdi.png";
import Tma from "../../../assets/images/tma.png";
import Ot from "../../../assets/images/others.png";

export function FormStep3() {
   const navigate = useNavigate();
   const { data, setData } = useForm();
   const [interests, setInterests] = useState(data.interests);

   useEffect(() => {
      setData({ ...data, currentStep: 3 });
      if (data.dateBorn, data.phone, data.state, data.city == "") {
         navigate('/sing-up/step1')
      }
   }, []);
   
   const handleNextStep = () => {
      if (interests === "") {
         toast.error("Por favor, selecione algum interesse");
      } else {
         setData({ ...data, interests: interests });
         navigate(`/sing-up/step${data.currentStep + 1}`);
      }
   };
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
               Quero te conhecer melhor!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Essa etapa nos ajudará a entender melhor o conteúdo que você quer
               ver.
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>
               <ProgressStepBar currentStep={data.currentStep} />
            </div>
            <hr />
            <div className="mb-4">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Qual é o seu interesses?
               </h2>
               <p className="is-size-6 has-text-centered">
                  Garanto que temos a sua matéria preferida!
               </p>
            </div>
            <ContentOptions className="mt-6">
                  <SelectOption
                     title="Desenvolvimento de Sistemas"
                     icon={Ds}
                     selected={interests === 0}
                     onClick={() => setInterests(0)}
                  />
                  <SelectOption
                     title="Design de Interiores"
                     icon={Tdi}
                     selected={interests === 1}
                     onClick={() => setInterests(1)}
                  />
                  <SelectOption
                     title="Meio Ambiente"
                     icon={Tma}
                     selected={interests === 2}
                     onClick={() => setInterests(2)}
                  />
                  <SelectOption
                     title="Outros"
                     icon={Ot}
                     selected={interests === 3}
                     onClick={() => setInterests(3)}
                  />
            </ContentOptions>
         </ContentForm>
         <Buttons
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
            textNextStep="Próxima Etapa"
         />
      </div>
   );
}
