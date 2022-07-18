import { Container, ContainerImg, ContainerInput } from "./styles";
import Logo from "../../../assets/images/acrostico.png";

export function Footer() {
   return (
      <Container className="mt-6 py-6">
         <div className="container is-widescreen">
             <ContainerImg>
                <img src={Logo} alt="Logo" />
                <p>
                   Problemas no cadastro? Deixe seu email que entraremos em contato.
                </p>
             </ContainerImg>
             <ContainerInput>
                <div className="contentInput py-2 px-5 is-flex is-justify-content-space-between">
                   <input type="text" placeholder="Email" />
                   <span>Enviar</span>
                </div>
             </ContainerInput>
         </div>
      </Container>
   );
}
