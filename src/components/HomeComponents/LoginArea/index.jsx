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
            <C.ContentLogin className="mt-6 is-flex is-flex-direction-column is-align-items-center has-background-danger">
               <form>
                  <div className="contentInput mb-5 px-4 is-flex is-align-items-center">
                     <span>
                        <FiUser className="mr-2" size="23" style={{color: '#666666'}}/>
                     </span>
                     <input type="email" className="is-size-5" placeholder="E-mail"/>
                  </div>
                  <div className="contentInput mb-2 px-4 is-flex is-align-items-center">
                     <span>
                        <FiLock className="mr-2" size="23" style={{color: '#666666'}}/>
                     </span>
                     <input type={viewPassword? 'text' : 'password'}  className="is-size-5" placeholder="Senha"/>
                     <span>
                        {
                           viewPassword
                           ?<BsEyeSlash onClick={handleViewPassword} size="23" style={{color: '#666666', cursor: 'pointer'}}/>
                           :<BsEye onClick={handleViewPassword} size="23" style={{color: '#666666', cursor: 'pointer'}}/>
                        }
                        
                     </span>
                  </div>
                  <div className="has-text-right">
                     <a 
                        href="/forgetPassword" 
                        style={{color:'#12694C'}} 
                        className="is-size-6 has-text-weight-medium">
                           Esqueceu sua senha?
                     </a>
                     </div>
               </form>
               <button 
                  className="py-3 px-6"
                  style={{background:'#1DA87A', borderRadius:'10px', border:'none', cursor:'pointer'}}
               >
                     Login
               </button>
               <div>...</div>
            </C.ContentLogin>
         </div>
         <div className="is-hidden-mobile column">...</div>
      </section>
   );
}
