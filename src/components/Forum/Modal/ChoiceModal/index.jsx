import Yes from '../../../../assets/images/yes.png'
import No from '../../../../assets/images/no.png'
/* Styles */
import { Content, Container } from "./styles";

export function ChoiceModal ({type, choice, setChoice}){
    return(
        <Container type={type} choice={choice} onClick={()=>setChoice(type)}>
            <Content>
                <div className="circle">
                    <img src={type === 'yes' ? Yes : No} alt="yes or no"/>
                </div>
                <p>{type === 'yes' ? 'Sim' : 'Não'}</p>
            </Content>
        </Container>
    )
}