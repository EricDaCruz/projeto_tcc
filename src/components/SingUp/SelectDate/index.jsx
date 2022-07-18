import { useState } from 'react'
import moment from 'moment'
import { Container } from './styles'

export function SelectDate({value, setDateBorn}){
    const[selectDate, setSelectDate] = useState(value)

    const handleSetData = (value) => {
        setSelectDate(value)
        setDateBorn(moment(value).format('YYYY-MM-DD'))
    }
    return(
            <Container className="control">
                <input 
                    type="date" 
                    className="input is-rounded is-medium"
                    onChange={(e) => handleSetData(e.target.value)}
                    value={selectDate} 
                    min="1942-01-01"
                />
            </Container>
    )
}
