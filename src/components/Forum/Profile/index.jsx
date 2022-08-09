import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, ContentInputs, ContentProfile, Inputs, ContentButton, Button } from "./styles";
import { Field } from "../../SingUp/Field";
import { SelectDate } from "../../SingUp/SelectDate";
import { DropdownStates } from "../../SingUp/Dropdowns/DropdownStates";
import { DropdownCities } from "../../SingUp/Dropdowns/DropdownCities";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
/* Classes */
import { User } from "../../../services/User";

export const Profile = (params) => {
   const { userId } = useParams();
   const [haveUserData, setHaveUserData] = useState(false);
   const [dateBorn, setDateBorn] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [photoUrl, setPhotoUrl] = useState("");
   const [city, setCity] = useState("");
   const [state, setState] = useState("");
   const [phone, setPhone] = useState("");
   const [changedData, setChangeData] = useState(false)

   useEffect(() => {
      const user = new User("", userId);
      user.GetInfoUser().then((data) => {
         console.log(data.dateBorn);
         setDateBorn(data.dateBorn);
         setName(data.name);
         setEmail(data.email);
         setUsername(data.username);
         setPhotoUrl(data.photoUrl);
         setCity(data.location.city);
         setState(data.location.state);
         setPhone(data.phone);
      });
      setHaveUserData(true);
   }, []);


   const handleChangeData = (value, input) =>{
      setChangeData(true)
      switch (input) {
         case 'name':
            setName(value)
            break;
         case 'email':
            setEmail(value)
            break;
         case 'phone':
            setPhone(value)
            break;
         case 'username':
            setUsername(value)
            break;
         case 'date':
            setDateBorn(value)
            break;
      }
   }

   return (
      <Container>
         {haveUserData ? (
            <>
               <ContentProfile>
                  <img src={photoUrl} alt="" />
               </ContentProfile>
               <ContentInputs>
                  <Field label="Nome">
                     <Inputs  className="input is-medium pl-4" type="text" value={name} onChange={e => handleChangeData(e.target.value,'name')} />
                  </Field>
                  <Field label="Email">
                     <Inputs   className="input is-medium pl-4" type="email" value={email} onChange={e => handleChangeData(e.target.value,'email')}/>
                  </Field>
                  <Field label="Celular">
                     <Inputs  className="input is-medium pl-4" type="text" value={phone} onChange={e => handleChangeData(e.target.value,'phone')}/>
                  </Field>
                  <Field label="username">
                     <Inputs className="input is-medium pl-4" type="text" value={username} onChange={e => handleChangeData(e.target.value,'username')}/>
                  </Field>
                  <Field label="Data de Nascimento">
                     <SelectDate value={dateBorn} setDateBorn={setDateBorn} onChange={e => handleChangeData(e.target.value,'date')}/>
                  </Field>
                  <Field label="Estado">
                  <div className="control has-icons-right">
                        <DropdownStates
                           value={state}
                           handleFormLocalization={setState}
                        />
                        <span className="icon is-small is-right">
                           <MdOutlineKeyboardArrowDown
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
                  <Field label="Cidade">
                  <div className="control has-icons-right">
                        <DropdownCities
                           value={city}
                           state={state}
                           handleFormLocalization={setCity}
                        />
                        <span className="icon is-small is-right">
                           <MdOutlineKeyboardArrowDown
                              style={{ color: "#A0A3BD" }}
                           />
                        </span>
                     </div>
                  </Field>
                  <ContentButton>
                     {
                     changedData && (
                        <Button >Atualizar Perfil</Button>
                        )
                     }
                    <Button delete={true}>Deletar Perfil</Button>
                  </ContentButton>
               </ContentInputs>
            </>
         ) : (
            <div> Loading... </div>
         )}
      </Container>
   );
};
