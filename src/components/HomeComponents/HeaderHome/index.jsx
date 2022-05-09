import { Link } from "react-router-dom";
import colors from '../../../App.styles'

export function HeaderHome() {
	const handleNavburger = () => {
		// Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
	}

   return (
      <header>
         <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
               <a className="navbar-item" href="https://bulma.io">
                  <img
                     src="https://bulma.io/images/bulma-logo.png"
                     width="112"
                     height="28"
                  />
               </a>

               <a
							 		onClick={handleNavburger}
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
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-end">
                  <div className="navbar-item">
                     <div className="buttons">
                        <Link to="/sing-up" className="button" 
                           style={{
                              backgroundColor: `${colors.green}`,
                              color:"white",
                              width: "160px",
                              height: "45px",
                              borderRadius: "100px",
                              letterSpacing:"1px"                              
                           }}
                        >
                           <strong>Cadastre-se</strong>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
};

