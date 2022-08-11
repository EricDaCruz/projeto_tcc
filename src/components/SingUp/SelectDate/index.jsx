import { useState, useEffect } from 'react'
import moment from 'moment'
import { Container } from './styles'

export function SelectDate({value, setDateBorn,setChangeData}){
    const[selectDate, setSelectDate] = useState(value)

    const handleSetData = (value) => {
        setSelectDate(value)
        setDateBorn(moment(value).format('YYYY-MM-DD'))
        setChangeData && setChangeData(true)
    }
    return(
            <Container className="control">
                <input 
                    type="date" 
                    className="input is-medium"
                    onChange={(e) => handleSetData(e.target.value)}
                    value={selectDate ? selectDate  : value} 
                    min="1942-01-01"
                />
            </Container>
    )
}
