import { useState } from "react";
/*Styles */
import * as C from "./styles";

import Img from '../../../assets/images/Bg.png'

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
      <section className=" mt-4 columns">
         <C.Container className="column is-narrow-mobile is-half">
            <div className="contentText">
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
            <C.ContentLogin className="mt-6 is-flex is-flex-direction-column is-align-items-center ">
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
                  className=" mt-5 py-3 px-6 has-text-white has-text-weight-semibold is-size-5"
                  style={{background:'#1DA87A', borderRadius:'10px', border:'none', cursor:'pointer'}}
               >
                     Login
               </button>
               <div className="mt-6 is-flex is-flex-direction-column is-align-items-center">
                  <p className="mb-4">Entre com</p>
                  <div className="is-size-6 mb-4">
                     <FcGoogle className="mr-6" size="45" style={{cursor:'pointer'}}/>
                     <BsFacebook size="45" style={{color:"#3B5998", cursor:'pointer'}}/>
                  </div>
                  <p className="is-size-6">
                     Ainda não tem uma conta? 
                     <Link to="/sing-up/step1" className="ml-1 has-text-weight-bold" style={{color: '#12694C'}}>
                        Cadastre-se
                     </Link>
                  </p>
               </div>
            </C.ContentLogin>
         </C.Container>
         <div className="is-hidden-mobile column is-flex is-justify-content-center is-align-items-center">
            <img src={Img} style={{width:'90%'}}/>
         </div>
      </section>
   );
}
