import {Button} from '../styles'

export const NextStep = ({text, onClick}) => {
    return ( 
        <Button back={false} onClick={onClick}>
            {text}
        </Button>
     );
}
 