import Logo from "../../../assets/images/Logo.svg";
import { BiPlusCircle, BiBell } from "react-icons/bi";
/*Styles*/
import { NavbarBrand } from "./styles";

export function Header() {
   return (
      <header className="px-5 py-1" style={{ borderBottom: " 1px solid #EAEAEA" }}>
         <nav className="navbar" role="navigation" aria-label="main navigation">
            <NavbarBrand className="navbar-brand is-align-items-center">
               <a className="navbar-item" href="https://bulma.io">
                  <img src={Logo} width="112" height="28" />
               </a>

               <h1 className="has-text-weight-bold is-size-6">
                  Minhas Questões
               </h1>

               <a
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
               >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
               </a>
            </NavbarBrand>

            <div
               id="navbarBasicExample"
               className="navbar-menu"
            >
               <div className="navbar-start is-align-items-center is-justify-content-space-between" style={{flex: '1'}}>
                  <div className="px-3 py-3" style={{background:'#188F67', borderRadius:'5px'}}>
                     <a href="makeQuestions" className="is-flex  is-align-items-center">
                        <BiPlusCircle color="#fff" size="16"/>
                        <p className="ml-2 has-text-weight-bold is-size-7 has-text-white">Faça uma pergunta</p>
                     </a>
                  </div>
                  <div className="is-flex is-align-items-center">
                     <a href="button">
                        <BiBell size="27" color="#808080"/>
                     </a>
                  </div>
                  <div className="is-flex is-align-items-center">
                     <figure className="image is-48x48">
                        <img
                           className="is-rounded"
                           src="https://bulma.io/images/placeholders/128x128.png"
                        />
                     </figure>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
}
