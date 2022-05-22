import { useState } from "react";
/*Styles */
import * as C from "./styles";

import { Link } from "react-router-dom";

/* Icons */
import { FiUser, FiLock } from "react-icons/fi";
import { BsEyeSlash, BsEye, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export function LoginArea() {
   const [viewPassword, setViewPassword] = useState(false);
   const handleViewPassword = () => {
      setViewPassword(!viewPassword);
   };

   return (
      <section className=" mt-4 has-background-primary columns">
         <div className="column .is-narrow-mobile is-three-fifths">
            <div>
               <h2
                  className="has-text-weight-bold is-size-2"
                  style={{ color: "#563939" }}
               >
                  Login
               </h2>
               <p className="is-size-5" style={{ color: "#563939" }}>
                  Utilize seus dados de acesso para entrar
               </p>
            </div>
            <C.ContentLogin className="is-flex is-flex-direction-column is-align-items-center has-background-danger">
               <form className="has-background-grey">
                  <div className="field is-flex is-align-items-center ">
                     <span>
                        <FiUser />
                     </span>
                     <input type="text" />
                  </div>
                  <div className="field has-background-primary is-flex is-align-items-center">
                     <span>
                        <FiLock />
                     </span>
                     <input type="password" />
                     <span>
                        <BsEye />
                     </span>
                  </div>
               </form>
               <button>Login</button>
               <div>...</div>
            </C.ContentLogin>
         </div>
         <div className="column">...</div>
      </section>
   );
}
