import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, ContentInputs, ContentProfile, Inputs } from "./styles";
import { Field } from "../../SingUp/Field";
import { SelectDate } from "../../SingUp/SelectDate";
import { DropdownStates } from "../../SingUp/Dropdowns/DropdownStates";
import { DropdownCities } from "../../SingUp/Dropdowns/DropdownCities";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
/* Classes */
import { User } from "../../../services/User";

export const Profile = (params) => {
   const { userId } = useParams();
   const [dateBorn, setDateBorn] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [photoUrl, setPhotoUrl] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [phone, setPhone] = useState("");

   useEffect(() => {
      const user = new User("", userId);
      user.GetInfoUser().then((data) => {
         console.log(data);
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

   return (
      <Container>
         <ContentProfile>
            <img src={photoUrl} alt="" />
         </ContentProfile>
         <ContentInputs>
            <Field label="Nome">
               <Inputs type="text" value={name} />
            </Field>
            <Field label="Email">
               <Inputs type="email" value={email} />
            </Field>
            <Field label="Celular">
               <Inputs type="text" value={phone} />
            </Field>
            <Field label="username">
               <Inputs type="text" value={username} />
            </Field>
            <Field label="Data de Nascimento">
               <SelectDate value={dateBorn} setDateBorn={setDateBorn} />
            </Field>
            <Field label="Estado">
               
            </Field>
            <Field label="Cidade">
               
            </Field>
         </ContentInputs>
      </Container>
   );
};
