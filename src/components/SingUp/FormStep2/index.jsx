import { ContentForm, Inputs, ButtonNextStep, Select } from "./styles";

import { BiUser, BiAt } from 'react-icons/bi'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import {BsBuilding} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "../../../contexts/FormContext";
import { SelectDate } from "../../SelectDate";


export function FormStep2(){
   const {data, setData} = useForm()

   useEffect(()=>{
      console.log(data);
   },[])

    return (
        <div className="mx-auto my-auto" style={{ maxWidth: "700px" }}>
           <div className="mb-6 is-flex is-flex-direction-column is-align-items-center">
              <h1 className="mb-3 is-size-3 has-text-weight-semibold has-text-dark">
              {data.name}, estamos na segunda etapa!
              </h1>
              <p className="is-size-6 has-text-centered" style={{ maxWidth:'500px' }}>
              Preciso dessas informações para os meus desenvolvedores conhecerem melhor o nosso público, tudo bem?
              </p>
           </div>
           <ContentForm className="px-6 py-6 has-background-white">
              <div>barra de progresso 2/4</div>
              <hr />
              <div className="mb-6">
                 <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">Dados pessoais</h2>
                 <p className="is-size-6 has-text-centered">Por favor, preencha todos os campos abaixo.</p>
              </div>
              <form>
                 <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between">
                     <div className="field">
                        <label className="label has-text-dark" >Data de Nascimento</label>
                        <SelectDate data={data} setData={setData}/>
                     </div>
                     <div className="field">
                        <label className="label has-text-dark">Telefone</label>
                        <div className="control has-icons-right">
                           <Inputs
                              className="input is-rounded is-medium"
                              type="email"
                              placeholder="(00) 00000 0000"
                           />
                           <span className="icon is-small is-right">
                              <IoPhonePortraitOutline />
                           </span>
                        </div>
                        {/* <p className="help is-success">This username is available</p> */}
                     </div>
                     <div className="field">
                        <label className="label has-text-dark" >Estado</label>
                        <div className="control">
                           <div className="select is-medium is-rounded">
                              <Select>
                                 <option defaultValue disabled>Selecione</option>
                                 <option value="sp">São Paulo</option>
                                 <option value="mg">Minas Gerais</option>
                                 <option value="rj">Rio de Janeiro</option>
                              </Select>
                           </div>
                        </div>
                        {/* <p className="help is-success">This username is available</p> */}
                     </div>
                     <div className="field">
                        <label className="label has-text-dark" >Cidade</label>
                        <div className="control has-icons-right">
                           <Inputs
                              className="input is-rounded is-medium"
                              type="email"
                              placeholder="Sorocaba"
                           />
                           <span className="icon is-small is-right">
                              <BsBuilding />
                           </span>
                        </div>
                        {/* <p className="help is-success">This username is available</p> */}
                     </div>
                 </div>
              </form>
           </ContentForm>
           <Link
              className="mt-6 is-flex is-justify-content-flex-end"
              to="/sing-up/step3"
           >
              <ButtonNextStep>
                 <p>Próxima Etapa</p>
              </ButtonNextStep>
           </Link>
        </div>
)
        
}