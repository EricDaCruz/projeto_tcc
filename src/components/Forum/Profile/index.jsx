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
import Modal from "react-modal";
import { Field } from "../../SingUp/Field";
import { SelectDate } from "../../SingUp/SelectDate";
import { DropdownStates } from "../../SingUp/Dropdowns/DropdownStates";
import { DropdownCities } from "../../SingUp/Dropdowns/DropdownCities";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { Modal as ModalContent }  from "../Modal";
/* Validações */
import { format } from "telefone";
import { validatePhoneNumber } from "../../../helpers/ValidFormRegister";
/* Classes */
import { User } from "../../../services/User";
/* Firebase */
import { auth } from "../../../firebase";

const modalStyles = {
   overlay:{
      backgroundColor: "rgba(45,43,43,0.5)",
      zIndex: 1000,
   },
   content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "2rem",
      border: '1px solid #eff0f7',
      maxWidth:'43rem',
      width: '100%',
      boxShadow: '0px 5px 16px rgba(8, 15, 52, 0.06)',
   },
};

Modal.setAppElement('#root');

export const Profile = (params) => {
   const navigate = useNavigate();
   const { userId } = useParams();
   const [data, setData] = useState([]);
   const [dateBorn, setDateBorn] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [photoUrl, setPhotoUrl] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [phone, setPhone] = useState("");
   const [changedData, setChangeData] = useState(false);
   const [modalIsOpen, setModalIsOpen] = useState(false);

   useEffect(() => {
      const currentUser = auth.currentUser;
      // if (currentUser?.uid !== userId) {
      //    const user = new User();

      //    user.SignOutUser().then(() => {
      //       navigate("/");
      //    });

      //    return;
      // } 
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

   }, []);
   const handlePhotoUrl = async (dataImage) => {
      if (
         dataImage.type === "image/jpeg" ||
         dataImage.type === "image/png" ||
         dataImage.type === "image/jpg"
      ) {
         const reader = new FileReader();
         reader.onload = async () => {
            const base64String = await reader.result;
            setPhotoUrl(base64String);
            setChangeData(true);
            setData({ ...data, photoUrl: base64String });
         };
         reader.readAsDataURL(dataImage);
      } else {
         toast.error("Formato de imagem inválido");
      }
   };
   const handleChangeData = async (value, input) => {
      setChangeData(true);
      switch (input) {
         case "name":
            setName(value);
            await setData({ ...data, name: value });
            break;
         case "email":
            setEmail(value);
            await setData({ ...data, email: value });
            break;
         case "phone":
            setPhone(value);
            const validPhone = validatePhoneNumber(value);
            if (validPhone !== null) {
               const formatPhone = format(validPhone).replace(/[-]/g, " ");
               setPhone(formatPhone);
               await setData({ ...data, phone: formatPhone });
            } else {
               await setData({ ...data, phone: value });
            }
            break;
         case "username":
            setUsername(value);
            await setData({ ...data, username: value });
            break;
         case "date":
            setDateBorn(value);
            await setData({ ...data, dateBorn: value });
            break;
         case "city":
            setCity(value);
            await setData({ ...data, location: { state, city: value } });
            break;
         case "state":
            setState(value);
            await setData({ ...data, location: { state: value, city } });
            break;
      }
   };
   const updateProfile = async () => {
      if (
         name === "" ||
         email === "" ||
         username === "" ||
         dateBorn === "" ||
         phone === "" ||
         photoUrl === "" ||
         city === "" ||
         state === ""
      ) {
         toast.error("Preencha todos os campos");
      } else {
         const user = new User(data, userId);
         await user.UpdateProfile();
         setChangeData(false);
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
         <ContentProfile img={photoUrl}>
            <label htmlFor="inputFile">
               <div>
                  <p>
                     <BsFillCameraFill />
                     Mudar foto de perfil
                  </p>
               </div>
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
                  onChange={(e) => handleChangeData(e.target.value, "name")}
               />
            </Field>
            <Field className="mt-3" label="Email">
               <Inputs
                  className="input is-medium pl-4"
                  type="email"
                  value={email}
                  onChange={(e) => handleChangeData(e.target.value, "email")}
               />
            </Field>
            <Field className="mt-3" label="Celular">
               <Inputs
                  className="input is-medium pl-4"
                  type="text"
                  value={phone}
                  onChange={(e) => handleChangeData(e.target.value, "phone")}
               />
            </Field>
            <Field className="mt-3" label="Username">
               <Inputs
                  className="input is-medium pl-4"
                  type="text"
                  value={username}
                  onChange={(e) => handleChangeData(e.target.value, "username")}
               />
            </Field>
            <Field className="mt-3" label="Data de Nascimento">
               <SelectDate
                  value={dateBorn}
                  setDateBorn={setDateBorn}
                  handleChangeData={handleChangeData}
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
                     <MdOutlineKeyboardArrowDown style={{ color: "#A0A3BD" }} />
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
                     <MdOutlineKeyboardArrowDown style={{ color: "#A0A3BD" }} />
                  </span>
               </div>
            </Field>
            <ContentButton>
               <Button
                  onClick={updateProfile}
                  color={changedData ? "#059142" : "#ccc"}
               >
                  Atualizar Perfil
               </Button>
               <Button delete={true} onClick={() => setModalIsOpen(true)}>Deletar Perfil</Button>
            </ContentButton>
         </ContentInputs>
         <Modal isOpen={modalIsOpen} style={modalStyles}>
            <ModalContent deleteProfile={deleteProfile} setModalIsOpen={setModalIsOpen}/>
         </Modal>
      </Container>
   );
};
