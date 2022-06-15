import { ContentForm, Inputs, ButtonNextStep, Select } from "./styles";
import { BiUser } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import toast from "react-hot-toast";

import {Field} from '../Field'

export function FormStep4() {
   const navigate = useNavigate()
   const{data, setData} = useForm()

   const[username, setUsername] = useState(data.username)
   const[password, setPassword] = useState(data.password)
   const[confirmPassword, setConfirmPassword] = useState("")

   useEffect(()=>{
      setData({...data, currentStep:4})
   },[])

   const handleNextStep = () => {
      if(username == "" || password == "" || confirmPassword == "") {
         toast.error('Por favor, preencha todos os campos')
      }else{
         if(password != confirmPassword) {
            toast.error('Senhas diferentes')
         }else{
            setData({...data, username: username, password: password})
            navigate('/sing-up/completed')
         }
      }
   }

   return (
      <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
         <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
            <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark">
               Estamos concluindo, {data.name}!
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
            <div>barra de progresso {data.currentStep}/4</div>
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
               <div className="mb-5">
                  <Field label='Nome de usuário'>
                        <div className="control has-icons-right">
                           <Inputs
                               className="input is-medium is-rounded"
                               type="text"
                               placeholder="Seu nome de usuário"
                               value={username}
                               onChange={e => setUsername(e.target.value)}
                            />
                            <span className="icon is-small is-right">
                               <BiUser style={{color:'#A0A3BD'}}/>
                            </span>
                        </div>
                  </Field>
               </div>
               <div className="columns is-flex-wrap-wrap">
                  <Field className="column is-half" label="Senha">
                        <div className="control">
                           <Inputs
                              className="input is-medium is-rounded"
                              type="password"
                              placeholder="Seu senha"
                              onChange={e => setPassword(e.target.value)}
                           />
                        </div>
                  </Field>
                   <Field className="column is-half" label="Confirmar Senha">
                     <div className="control">
                           <Inputs
                              className="input is-medium is-rounded"
                              type="password"
                              placeholder="Seu senha novamente"
                              onChange={e => setConfirmPassword(e.target.value)}
                           />
                     </div>
                   </Field>
               </div>
            </form>
         </ContentForm>
         <span className="is-clickable mt-6 is-flex is-justify-content-flex-end">
            <ButtonNextStep onClick={handleNextStep}>
               <p>Próxima Etapa</p>
            </ButtonNextStep>
         </span>
      </div>
   );
}
