import { useState, useEffect } from "react";
import { SignInUser } from '../../../services/signInUser'
import { SetItemLocalStorage, GetItemLocalStorage } from '../../../services/LocalStorage'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Img from '../../../assets/images/Bg.png'
import { FiUser, FiLock } from "react-icons/fi";
import { BsEyeSlash, BsEye, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import * as C from "./styles";

export function LoginArea() {
   const navigate = useNavigate();
   const [viewPassword, setViewPassword] = useState(false);
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("");

   useEffect(() => {
      //Verificar se tem um uid e levar pra /forum
      const userUid = GetItemLocalStorage('uid')
      if(userUid) {
         navigate('/forum')
      }
   },[])

   const handleViewPassword = () => {
      setViewPassword(!viewPassword);
   };
   const handleSignInUser = async () => {
      if(email === '' || password === '') {
         toast.error('Por favor, preencha todos os campos')
      }else{
         try{
            const user = await SignInUser(email, password)
            SetItemLocalStorage('uid', user.uid)
            if(user.uid){
               navigate('/forum')
              
            }
         }catch(error){
            switch (error.code){
               case 'auth/user-not-found':
                  toast.error('Usuário não encontrado')
                  break
               case 'auth/wrong-password':
               case 'auth/invalid-email':
                  toast.error('Senha ou usuário inválido')
                  break
               case 'auth/too-many-requests':
                  toast.warning('Muitas tentativas inválidas. Tente novamente mais tarde!')
                  break
               case 'auth/network-request-failed':
                  toast.warning('Verifique a conexão com a internet')
                  break
            }
         }
      }
   }

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
                     <input 
                        type="email" 
                        className="is-size-5" 
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="contentInput mb-2 px-4 is-flex is-align-items-center">
                     <span>
                        <FiLock className="mr-2" size="23" style={{color: '#666666'}}/>
                     </span>
                     <input 
                        type={viewPassword? 'text' : 'password'}  
                        className="is-size-5" 
                        placeholder="Senha"
                        onChange={e => setPassword(e.target.value)}
                     />
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
                  onClick={handleSignInUser}
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
