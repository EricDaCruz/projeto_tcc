import { Link } from 'react-router-dom';
import { Container  } from "./styles";
import img404 from '../../assets/images/404.png'


export function Error (){
    return(
        <Container>
            <img src={img404} alt="Error 404" />
            <Link to="/"> 
                Voltar para navegação
            </Link>
        </Container>
    )

}
