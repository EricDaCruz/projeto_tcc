import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../contexts/FormContext";
import { toast } from "react-toastify";
import { ProgressStepBar } from "../ProgressStepBar";
import { ContentForm, Inputs } from "./styles";
import { Field } from "../Field";
import { SelectDate } from "../SelectDate";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { DropdownCities } from "../Dropdowns/DropdownCities";
import { DropdownStates } from "../Dropdowns/DropdownStates";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NextStep } from "../Buttons/NextStep";
import { PreviousStep } from "../Buttons/PreviousStep";
/* Validações */
import moment from "moment";
import { validatePhoneNumber } from "../../../helpers/ValidFormRegister";
import { format } from "telefone";

export function FormStep2() {
   const navigate = useNavigate();
   const { data, setData } = useForm();
   const [dateBorn, setDateBorn] = useState(data.dateBorn);
   const [phoneNumber, setPhoneNumber] = useState(data.phone);
   const [locationState, setLocationState] = useState(data.state);
   const [locationCity, setLocationCity] = useState(data.city);
   const regExPhone =
      /[a-z]|[A-Z]|[/]|[|]|[@]|[#]|[!]|[$]|[%]|[¨]|[&]|[*]|[_]|[+]|[=]/g;

   useEffect(() => {
      setData({ ...data, currentStep: 2 });
      if ((data.name, data.username === "")) {
         navigate("/sing-up/step1");
      }
   }, []);

   const handleLocationState = (state) => {
      setLocationState(state);
   };
   const handleLocationCity = (city) => {
      setLocationCity(city);
   };
   const handlePhoneNumber = (phone) => {
   
      setPhoneNumber(phone);
      const validPhone = validatePhoneNumber(phone);
      if (validPhone !== null) {
         const formatPhone = format(validPhone).replace(/[-]/g, " ");
         setPhoneNumber(formatPhone);
      }
   };
   const handleNextStep = (e) => {
      if (
         dateBorn === "" ||
         phoneNumber === "" ||
         locationState === "" ||
         locationCity === ""
      ) {
         toast.error("Por favor, preencha todos os campos");
      } else {
         if (moment(dateBorn).isValid()) {
            if(moment(dateBorn).isAfter(moment().subtract(10,'years'))){
               toast.error("Você não pode ser menor de 10 anos");
            }else{
               if (validatePhoneNumber(phoneNumber) !== null) {
                  setData({
                     ...data,
                     dateBorn: dateBorn,
                     phone: phoneNumber,
                     state: locationState,
                     city: locationCity,
                  });
                  navigate(`/sing-up/step${data.currentStep + 1}`);
               } else {
                  toast.error("Por favor, insira um número de celular válido");
               }
            }
         } else {
            toast.error("Insira uma data válida");
         }
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
               {data.name}, estamos na segunda etapa!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Preciso dessas informações para os meus desenvolvedores
               conhecerem melhor o nosso público, tudo bem?
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>
               <ProgressStepBar currentStep={data.currentStep} />
            </div>
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Dados pessoais
               </h2>
               <p className="is-size-6 has-text-centered">
                  Por favor, preencha todos os campos abaixo.
               </p>
            </div>
            <form>
               <div className="columns is-flex-wrap-wrap">
                  <Field
                     className="column is-half mb-4 pr-3"
                     label="Data de Nascimento"
                  >
                     <SelectDate value={dateBorn} setDateBorn={setDateBorn} />
                  </Field>
                  <Field className="column is-half mb-4 pr-3" label="Celular">
                     <div className="control has-icons-right">
                        <Inputs
                           className="input is-rounded is-medium"
                           type="text"
                           placeholder="(00) 00000 0000"
                           onChange={(e) =>
                              handlePhoneNumber(
                                 e.target.value.replace(regExPhone, "")
                              )
                           }
                           value={phoneNumber}
                        />
                        <span className="icon is-small is-right">
                           <IoPhonePortraitOutline
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
                  <Field className="column is-half mb-4 pr-3" label="Estados">
                     <div className="control has-icons-right">
                        <DropdownStates
                           value={locationState}
                           handleFormLocalization={handleLocationState}
                        />
                        <span className="icon is-small is-right">
                           <MdOutlineKeyboardArrowDown
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
                  <Field className="column is-half mb-4 pr-3" label="Cidades">
                     <div className="control has-icons-right">
                        <DropdownCities
                           value={locationCity}
                           state={locationState}
                           disabled={locationState ? false : true}
                           handleFormLocalization={handleLocationCity}
                        />
                        <span className="icon is-small is-right">
                           <MdOutlineKeyboardArrowDown
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
               </div>
            </form>
         </ContentForm>
         <div className="is-flex is-justify-content-space-between mt-6">
            <PreviousStep onClick={handlePreviousStep} />
            <NextStep text="Próxima Etapa" onClick={handleNextStep} />
         </div>
      </div>
   );
}
