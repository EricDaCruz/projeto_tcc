import { useEffect } from "react";
import { useForm } from "../../../contexts/FormContext";

import { ContentForm, Inputs, ButtonNextStep } from "./styles";

import { BiUser, BiAt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function FormStep1() {
   const navigate = useNavigate()
   const {data, setData} = useForm() 

   useEffect(()=>{
      setData({...data, currentStep: 1})
   },[])

   const handleNextStep = () => {
      if(data.name != "" && data.email != ""){
         navigate('/sing-up/step2')
      }else{
         toast.error("Por favor, preencha todos os campo")
      }
   }

   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark">
               Seja bem-vindo à HETEC!
            </h1>
            <p className="is-size-6 has-text-centered" style={{ maxWidth:'500px' }}>
               Eu me chamo Etevaldo, e vou ajuda-lo a se cadastrar no melhor
               fórum tira dúvidas do mundo!
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>barra de progresso {data.currentStep}/4</div>
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">Quem é você?</h2>
               <p className="is-size-6 has-text-centered">Para começar, por favor me diga seu nome e email!</p>
            </div>
            <form>
               <div className="field">
                  <label className="label has-text-dark">Nome</label>
                  <div className="is-flex is-align-items-center control has-icons-right">
                     <Inputs
                        className="input is-medium"
                        type="text"
                        placeholder="Seu nome"
                        onChange={e => setData({...data, name:e.target.value})}
                        value={data.name}
                     />
                     <span className="icon is-small is-right">
                        <BiUser />
                     </span>
                  </div>
               </div>
               <div className="field">
                  <label className="label has-text-dark" >Email</label>
                  <div className="control has-icons-right">
                     <Inputs
                        className="input is-medium"
                        type="email"
                        placeholder="Seu Email"
                        onChange={e => setData({...data, email:e.target.value})}
                        value={data.email}
                     />
                     <span className="icon is-small is-right">
                        <BiAt />
                     </span>
                  </div>
               </div>
            </form>
         </ContentForm>
         <span className="mt-6 is-flex is-justify-content-flex-end">
            <ButtonNextStep onClick={handleNextStep}>
               <p>Próxima Etapa</p>
            </ButtonNextStep>
         </span>
      </div>
   );
}
