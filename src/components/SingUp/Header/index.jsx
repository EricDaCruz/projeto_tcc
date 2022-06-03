import { Button } from './styles'

export function Header() {
   return (
      <header className="container is-widescreen">
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
                     <Button className="buttons" >
                        <a >
                           Entrar
                        </a>
                     </Button>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   );
}
