import { Container } from './styles'

export function SelectOption({title, icon, selected}){
    return(
        <Container className="is-clickable py-4 px-3 is-flex is-align-items-center" selected={selected}>
            <img src={icon} className="mr-3"/>
            <p>{title}</p>
        </Container>
    )
}