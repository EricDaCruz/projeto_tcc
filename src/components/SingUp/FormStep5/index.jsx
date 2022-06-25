import { useEffect, useState } from "react";
import { useForm } from "../../../contexts/FormContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProgressStepBar } from "../ProgressStepBar";
import { ContentForm, Inputs } from "./styles";
import { Field } from "../Field";
import { SelectDate } from "../SelectDate";
import { DropdownCities } from "../Dropdowns/DropdownCities";
import { DropdownStates } from "../Dropdowns/DropdownStates";
import { DropdownInterest } from "../Dropdowns/DropdownInterest";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PreviousStep } from "../Buttons/PreviousStep";
import { NextStep } from "../Buttons/NextStep";
/* Validações */
import { validatePhoneNumber } from "../../../helpers/ValidFormRegister";
import validator from 'validator'
import { format } from "telefone";
/* Registrar usuarios */
import { CreateAuthEmail, RegisterUser } from "../../../services/CreateUser";

export function FormStep5() {
   const navigate = useNavigate();
   const { data, setData } = useForm();
   const [inputName, setInputName] = useState(data.name);
   const [inputUsername, setInputUsername] = useState(data.username);
   const [dateBorn, setDateBorn] = useState(data.dateBorn);
   const [phoneNumber, setPhoneNumber] = useState(data.phone);
   const [locationState, setLocationState] = useState(data.state);
   const [locationCity, setLocationCity] = useState(data.city);
   const [interests, setInterests] = useState(data.interests);
   const [inputEmail, setInputEmail] = useState(data.email);

   useEffect(() => {
      setData({ ...data, currentStep: 5 });
      if (data.name === "") {
         navigate("/sing-up/step1");
      }
   }, []);

   const handleFormName = (name) => {
      setInputName(name);
      setData({ ...data, name: name });
   };
   const handleFormUsername = (username) => {
      setInputUsername(username);
      setData({ ...data, username: username });
   };
   const handleFormDateBorn = (date) => {
      setDateBorn(date);
      setData({ ...data, dateBorn: date });
   };
   const handleFormPhone = (phone) => {
      setPhoneNumber(phone);
      const validPhone = validatePhoneNumber(phone);
      if (validPhone !== null) {
         const formatPhone = format(validPhone).replace(/[-]/g, " ");
         setPhoneNumber(formatPhone);
         setData({ ...data, phone: formatPhone });
      }
   };
   /* Arrumar essa joça, não está alterando a cidade corretamente */
   const handleLocationState = (state) => {
      setLocationState(state);
      setData({ ...data, state: state });
   };
   const handleLocationCity = (city) => {
      setLocationCity(city);
      setData({ ...data, city: city });
   };

   const handleFormInterests = (interest) => {
      setInterests(interest);
      setData({ ...data, interests: interest });
   };
   const handleFormEmail = (email) => {
      setInputEmail(email);
      setData({ ...data, email: email });
   };

   const handleRegisterUser = async () => {
      const user = await CreateAuthEmail(data);
      if (
         inputName === "" ||
         inputUsername === "" ||
         dateBorn === "" ||
         phoneNumber === "" ||
         locationState === "" ||
         locationCity === "" ||
         interests === "" ||
         inputEmail === ""
      ) {
         toast.error("Por favor, não deixe campos vazios");
      } else {
         if (!validatePhoneNumber(phoneNumber)) {
            toast.error("Insira um celular válido");
         } else {
            if(!validator.isEmail(inputEmail)) {
               toast.error("Insira um email válido")
            }else{
               if (user === "auth/email-already-in-use") {
                  toast.warning("Usuário já cadastrado");
               } else {
                  const uid = user.user.uid;
                  const dataUser = {
                     dateBorn: data.dateBorn,
                     email: data.email,
                     interests: data.interests,
                     location: { state: data.state, city: data.city },
                     name: data.name,
                     phone: data.phone,
                     username: data.username,
                  };
                  await RegisterUser(dataUser, uid);
                  navigate("/sing-up/step6");
               }
            }
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
               Falta Pouco, {data.name}!
            </h1>
            <p
               className="is-size-6 has-text-centered"
               style={{ maxWidth: "500px" }}
            >
               Agora só precisamos que você confirme seus dados, para ter uma
               fidelidade maior nas infromações.
            </p>
         </div>
         <ContentForm className="px-6 py-6 has-background-white">
            <div>
               <ProgressStepBar currentStep={data.currentStep} />
            </div>
            <hr />
            <div className="mb-6">
               <h2 className="mb-3 is-size-5 has-text-weight-semibold has-text-centered has-text-dark">
                  Confirmação cadastral
               </h2>
               <p className="is-size-6 has-text-centered">
                  Veja se todas as informações estão corretas.
               </p>
            </div>
            <form className="columns is-flex-wrap-wrap">
               <Field className="column is-half mb-4" label="Nome">
                  <div className="is-flex is-align-items-center control">
                     <Inputs
                        className="input  is-rounded is-medium"
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => handleFormName(e.target.value)}
                        value={inputName}
                     />
                  </div>
               </Field>
               <Field className="column is-half mb-4" label="Nome de usuário">
                  <div className="is-flex is-align-items-center control">
                     <Inputs
                        className="input  is-rounded is-medium"
                        type="text"
                        placeholder="Seu nome de usuário"
                        onChange={(e) => handleFormUsername(e.target.value)}
                        value={inputUsername}
                     />
                  </div>
               </Field>
               <Field
                  className="column is-half mb-4 pr-3"
                  label="Data de Nascimento"
               >
                  <SelectDate
                     value={dateBorn}
                     setDateBorn={handleFormDateBorn}
                  />
               </Field>
               <Field className="column is-half mb-4 pr-3" label="Celular">
                  <div className="control">
                     <Inputs
                        className="input is-rounded is-medium"
                        type="text"
                        placeholder="(00) 00000 0000"
                        onChange={(e) => handleFormPhone(e.target.value)}
                        value={phoneNumber}
                     />
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
                        disabled={locationCity ? false : true}
                        handleFormLocalization={handleLocationCity}
                     />
                     <span className="icon is-small is-right">
                        <MdOutlineKeyboardArrowDown
                           style={{ color: "#A0A3BD" }}
                        />
                     </span>
                  </div>
               </Field>
               <Field className="column is-full mb-4 pr-3" label="Interesses">
                  <div className="control has-icons-right">
                     <DropdownInterest
                        value={interests}
                        onChange={(e) => handleFormInterests(e.target.value)}
                     />
                     <span className="icon is-small is-right">
                        <MdOutlineKeyboardArrowDown
                           style={{ color: "#A0A3BD" }}
                        />
                     </span>
                  </div>
               </Field>
               <Field className="column is-full mb-4 pr-3" label="Email">
                  <div className="control has-icons-right">
                     <Inputs
                        className="input is-medium is-rounded"
                        type="text"
                        placeholder="Seu email"
                        value={inputEmail}
                        onChange={(e) => handleFormEmail(e.target.value)}
                     />
                  </div>
               </Field>
            </form>
         </ContentForm>
         <div className="is-flex is-justify-content-space-between mt-6">
            <PreviousStep onClick={handlePreviousStep} />
            <NextStep text="Cadastrar-se" onClick={handleRegisterUser} />
         </div>
      </div>
   );
}
