import { Container } from "./styles"

export function Footer(){
    return(
        <Container className="mt-6 py-6">
            <div className="container is-widescreen">
                <div className="columns ">
                    <div className="column is-two-thirds">
                        <img src="https://bulma.io/images/bulma-logo.png" alt=""/>
                        <p className="mt-3">Problemas no cadastro? Deixe seu email que entraremos em contato.</p>
                    </div>
                    <div className="column is-flex is-align-items-center">
                        <div className="contentInput py-2 px-5 is-flex is-justify-content-space-between">
                            <input type="text" placeholder="Email"/>
                            <span>
                                Enviar
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}