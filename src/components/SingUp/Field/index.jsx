import { Container } from "./styles"

export function  Field({label, children, className}) {
    return(
        <Container className={className}>
            <label className="label has-text-dark" >{label}</label>
            {children}
        </Container>
    )
}