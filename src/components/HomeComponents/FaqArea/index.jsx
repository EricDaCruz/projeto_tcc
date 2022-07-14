import { ContetnImg } from "./styles"
import Duvidas from '../../../assets/images/other-bg-questions.png'
import DuvidasEt from '../../../assets/images/duvidas-frequentes.png'

export function FaqArea (){
    return(
        <div className="container columns is-fluid is-flex is-flex-direction-column is-hidden-mobile is-hidden-tablet-only" style={{backgroundColor: '#E8F4F0', margin: '0'}}>
            <h2 className="column is-full has-text-centered has-text-weight-bold is-size-3" style={{color: '#2B3742'}}>Dúvidas Frequentes</h2>
            <div className="is-flex " style={{height: '100%'}}>
                <ContetnImg className="contentImage column is-half">
                <img src={Duvidas} className="questions"/>
                </ContetnImg>
                <ContetnImg className="contentImage column">
                    <img src={DuvidasEt} />
                </ContetnImg>
            </div>
        </div>
    )
}