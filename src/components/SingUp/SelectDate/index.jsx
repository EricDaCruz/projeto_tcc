import { useState } from 'react'
/* DatePicker */
import { Container } from './styles'

export function SelectDate({value, setDateBorn}){
    const[selectDate, setSelectDate] = useState(value)

    const handleSetData = (value) => {
        setSelectDate(value)
        setDateBorn(value)
    }
    return(
            <Container className="control">
                <input 
                    type="date" 
                    className="input is-rounded is-medium"
                    onChange={(e) => handleSetData(e.target.value)}
                    value={selectDate} 
                    min="1942-01-01"
                    max="2012-12-31"
                />
            </Container>
    )
}
