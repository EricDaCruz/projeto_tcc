import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
   Container,
   ContentInputs,
   ContentProfile,
   Inputs,
   ContentButton,
   Button,
} from "./styles";
import { Field } from "../../SingUp/Field";
import { SelectDate } from "../../SingUp/SelectDate";
import { DropdownStates } from "../../SingUp/Dropdowns/DropdownStates";
import { DropdownCities } from "../../SingUp/Dropdowns/DropdownCities";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
/* Validações */
import { format } from "telefone";
import { validatePhoneNumber } from "../../../helpers/ValidFormRegister";
import validator from "validator";
import { FindExistUserName } from "../../../services/FindExistUserName";
/* Classes */
import { User } from "../../../services/User";
import { Modal } from "../Modal";
import moment from "moment";

export const Profile = (params) => {
   const navigate = useNavigate();
   const { userId } = useParams();
   const [dateBorn, setDateBorn] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [photoUrl, setPhotoUrl] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [phone, setPhone] = useState("");
   const [changedData, setChangeData] = useState(false);

   useEffect(() => {
      const user = new User("", userId);
      user.GetInfoUser().then((data) => {
         setDateBorn(data.dateBorn);
         setName(data.name);
         setEmail(data.email);
         setUsername(data.username);
         setPhotoUrl(data.photoUrl);
         setCity(data.location.city);
         setState(data.location.state);
         setPhone(data.phone);
      });
      //  setHaveUserData(true);
   }, []);
   const handlePhotoUrl = async (dataImage) => {
      setChangeData(true);
      const reader = new FileReader();
      reader.onload = async () => {
         const base64String = await reader.result;
         setPhotoUrl(base64String);
      };
      reader.readAsDataURL(dataImage);
   };
   const handleChangeData = (value, input) => {
      setChangeData(true);
      switch (input) {
         case "name":
            setName(value);
            break;
         case "email":
            setEmail(value);
            break;
         case "phone":
            setPhone(value);
            const validPhone = validatePhoneNumber(value);
            if (validPhone !== null) {
               const formatPhone = format(validPhone).replace(/[-]/g, " ");
               setPhone(formatPhone);
            }
            break;
         case "username":
            setUsername(value);
            break;
         case "date":
            setDateBorn(value);
            break;
         case "city":
            setCity(value);
            break;
         case "state":
            setState(value);
            break;
      }
   };
   const updateProfile = async () => {
      const data = {
         name,
         email,
         username,
         dateBorn,
         phone,
         photoUrl,
         location: {
            city,
            state,
         },
      };
      if (
         name === "" ||
         email === "" ||
         username === "" ||
         dateBorn === "" ||
         phone === "" ||
         photoUrl === "" ||
         location.city === "" ||
         location.state === ""
      ) {
         toast.error("Preencha todos os campos");
      } else {
         if (moment(dateBorn).isValid()) {
            if (moment(dateBorn).isAfter(moment().subtract(10, "years"))) {
               toast.error("Você não pode ser menor de 10 anos");
            } else {
               if (validator.isEmail(email)) {
                  const existUsernames = await FindExistUserName();
                  if (existUsernames.includes(username)) {
                     toast.error("Este nome de usuário já existe");
                  } else {
                     const user = new User(data, userId);
                     await user.UpdateProfile();
                     setChangeData(false);
                  }
               } else {
                  toast.error("Insira um email válido");
               }
            }
         } else {
            toast.error("Data de nascimento inválida");
         }
      }
   };
   const deleteProfile = async () => {
         const user = new User("", userId);
         await user.DeleteProfile();
         await navigate("/");
         toast.success("Perfil deletado com sucesso!");
   };

   return (
      <Container>
         {
            <>
               <ContentProfile img={photoUrl}>
                  <label htmlFor="inputFile">
                     <div>
                        <p>
                           <BsFillCameraFill />
                           Mudar foto de perfil
                        </p>
                     </div>
                     {/* <img src={photoUrl} alt="" /> */}
                  </label>
                  <input
                     id="inputFile"
                     type="file"
                     onChange={(e) => handlePhotoUrl(e.target.files[0])}
                  />
               </ContentProfile>
               <ContentInputs>
                  <Field className="mt-3" label="Nome">
                     <Inputs
                        className="input is-medium pl-4"
                        type="text"
                        value={name}
                        onChange={(e) =>
                           handleChangeData(e.target.value, "name")
                        }
                     />
                  </Field>
                  <Field className="mt-3" label="Email">
                     <Inputs
                        className="input is-medium pl-4"
                        type="email"
                        value={email}
                        onChange={(e) =>
                           handleChangeData(e.target.value, "email")
                        }
                     />
                  </Field>
                  <Field className="mt-3" label="Celular">
                     <Inputs
                        className="input is-medium pl-4"
                        type="text"
                        value={phone}
                        onChange={(e) =>
                           handleChangeData(e.target.value, "phone")
                        }
                     />
                  </Field>
                  <Field className="mt-3" label="Username">
                     <Inputs
                        className="input is-medium pl-4"
                        type="text"
                        value={username}
                        onChange={(e) =>
                           handleChangeData(e.target.value, "username")
                        }
                     />
                  </Field>
                  <Field className="mt-3" label="Data de Nascimento">
                     <SelectDate
                        value={dateBorn}
                        setDateBorn={setDateBorn}
                        setChangeData={setChangeData}
                     />
                  </Field>
                  <Field className="mt-3" label="Estado">
                     <div className="control has-icons-right">
                        <DropdownStates
                           value={state}
                           handleFormLocalization={setState}
                           handleChangeData={handleChangeData}
                        />
                        <span className="icon is-small is-right">
                           <MdOutlineKeyboardArrowDown
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
                  <Field className="mt-3" label="Cidade">
                     <div className="control has-icons-right">
                        <DropdownCities
                           value={city}
                           state={state}
                           handleFormLocalization={setCity}
                           handleChangeData={handleChangeData}
                        />
                        <span className="icon is-small is-right">
                           <MdOutlineKeyboardArrowDown
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
                  <ContentButton>
                     <Button
                        onClick={changedData ? updateProfile : undefined}
                        color={changedData ? "#059142" : "#ccc"}
                     >
                        Atualizar Perfil
                     </Button>
                     <Modal deleteProfile={deleteProfile} />
                  </ContentButton>
               </ContentInputs>
            </>
         }
      </Container>
   );
};
