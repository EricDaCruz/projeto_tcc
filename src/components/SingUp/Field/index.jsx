import { Container } from "./styles"

export function  Field({label, children}) {
    return(
        <Container className="mb-4 pr-3 has-background-danger">
            <label className="label has-text-dark" >{label}</label>
            {children}
        </Container>
    )
}