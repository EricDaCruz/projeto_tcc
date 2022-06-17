import {Button} from '../styles'

export const PreviousStep = ({onClick}) => {
    return ( 
        <Button back={true} onClick={onClick}>
            Voltar
        </Button>
     );
}
