import Logo from "../../../assets/images/Logo.svg";
import { BiPlusCircle, BiBell } from "react-icons/bi";
/*Styles*/
import { NavbarBrand } from "./styles";

export function Header() {
   const handleNavburger = () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
         document.querySelectorAll(".navbar-burger"),
         0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
         // Add a click event on each of them
         $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
               // Get the target from the "data-target" attribute
               const target = el.dataset.target;
               const $target = document.getElementById(target);

               // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
               el.classList.toggle("is-active");
               $target.classList.toggle("is-active");
            });
         });
      }
   };

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
                  onClick={handleNavburger }
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
