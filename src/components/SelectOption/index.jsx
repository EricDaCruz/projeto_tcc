import { Container } from './styles'

export function SelectOption({title, icon, selected, onClick}){
    return(
        <Container onClick={onClick} className="is-clickable py-4 px-3 is-flex is-align-items-center" selected={selected}>
            <img src={icon} className="mr-3"/>
            <p>{title}</p>
        </Container>
    )
}