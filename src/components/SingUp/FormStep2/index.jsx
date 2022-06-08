import { ContentForm, Inputs, ButtonNextStep} from "./styles";
import { useNavigate } from 'react-router-dom'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import {BsBuilding} from 'react-icons/bs'
import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { SelectDate } from "../../SelectDate";
import { DropdownStates } from "../Dropdowns/DropdownStates";
import { DropdownCities } from "../Dropdowns/DropdownCities";


export function FormStep2(){
   const {data, setData} = useForm()
   const navigate = useNavigate();
   const[dateBorn, setDateBorn] = useState("")
   const[formLocalization, setFormLocalization] = useState({state:"", city:""});
   useEffect(()=>{
      // if(data.name === "" || data.email === ""){
      //    navigate('/sing-up/step1')
      // }
      console.log(data);
   },[])

   const handleFormLocalization = (name, value) =>{
      setFormLocalization({...formLocalization, [name]:value})
    }

   const handleNextStep = () =>{
      console.log(formLocalization, dateBorn);
   }

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
                        <label htmlFor="inputPhone" className="label has-text-dark">Telefone</label>
                        <div id="inputPhone" className="control has-icons-right">
                           <Inputs
                              className="input is-rounded is-medium"
                              type="email"
                              placeholder="(00) 00000 0000"
                           />
                           <span className="icon is-small is-right">
                              <IoPhonePortraitOutline />
                           </span>
                        </div>
                     </div>
                     <div className="field">
                        <label className="label has-text-dark" >Estado</label>
                        <div className="control">
                           <div className="select is-medium is-rounded">
                             <DropdownStates formLocalization={formLocalization} handleFormLocalization={handleFormLocalization}/>
                           </div>
                        </div>
                     </div>
                     <div className="field">
                        <label className="label has-text-dark" >Cidade</label>
                        <div className="select is-medium is-rounded">
                           <DropdownCities disabled={formLocalization.state ? false : true} formLocalization={formLocalization} handleFormLocalization={handleFormLocalization}/>
                        </div>
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
)
        
}