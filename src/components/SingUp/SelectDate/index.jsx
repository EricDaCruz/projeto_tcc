import { useState } from 'react'
/* DatePicker */
import { Container } from './styles'

import { useEffect } from 'react';

export function SelectDate({data, setDateBorn}){
    const[selectDate, setSelectDate] = useState(data.dateBorn)

    useEffect(()=>{
        console.log(selectDate);
    },[selectDate])

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
                />
            </Container>
    )
}
