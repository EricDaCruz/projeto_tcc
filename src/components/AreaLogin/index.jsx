import { useState } from "react";
/*Styles */
import * as C from "./styles";

import { Link } from "react-router-dom";

/* Icons */
import { FiUser, FiLock } from "react-icons/fi";
import { BsEyeSlash, BsEye, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const AreaLogin = () => {
   const [viewPassword, setViewPassword] = useState(false);
   const handleViewPassword = () => {
      setViewPassword(!viewPassword);
   };

   return (
      <div className="columns is-tablet mt-6 ">
         <div className="login column is-7 pl-5">
            <C.Container>
               <C.ContentLogin>
                  <h1>Login</h1>
                  <p className="titleHeader">
                     Utilize seus dados de acesso para entrar
                  </p>
                  <C.ContentLoginInputs>
                     <div className="field">
                        <p className="control has-icons-left has-icons-right">
                           <input
                              className="input is-medium"
                              autoFocus
                              type="email"
                              placeholder="Email"
                           />
                           <span className="icon  is-left">
                              <FiUser />
                           </span>
                        </p>
                     </div>
                     <div className="field">
                        <p className="control has-icons-left has-icons-right">
                           <input
                              className="input is-medium"
                              type={viewPassword ? "text" : "password"}
                              placeholder="Password"
                           />
                           <span className="icon is-small is-left">
                              <FiLock />
                           </span>
                           <span
                              onClick={handleViewPassword}
                              style={{ cursor: "pointer" }}
                              className="icon is-small is-right"
                           >
                              {viewPassword ? <BsEye /> : <BsEyeSlash />}
                           </span>
                        </p>
                     </div>
                     <p>Esqueceu a senha?</p>
                     <C.ContentButton>
                        <button className="button ">Login</button>
                     </C.ContentButton>
                  </C.ContentLoginInputs>
               </C.ContentLogin>
               <C.ContentOthersLogin>
                  <p>Entre com</p>
                  <C.ColSocialMedia>
                     <div className="socialMedia-item">
                        <FcGoogle />
                     </div>
                     <div className="socialMedia-item">
                        <BsFacebook />
                     </div>
                  </C.ColSocialMedia>
                  <p className="singUp">
                     Ainda não tem uma conta?{" "}
                     <Link to="/sing-up">Cadastre-se</Link>
                  </p>
               </C.ContentOthersLogin>
            </C.Container>
         </div>
         <C.ImageLogin className="column is-5 is-hidden-mobile"></C.ImageLogin>
      </div>
   );
};

export default AreaLogin;
