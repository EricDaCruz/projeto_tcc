import { LocalizationProvider, DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import frLocale from 'date-fns/locale/fr'
import { Container } from './styles'
import { FormatDate } from '../../helpers/FormatDate'

export function SelectDate({data, setData}){
    const[selectDate, setSelectDate] = useState(null)

    const handleSetData = (value) => {
        const formatDate = FormatDate(value)
        setSelectDate(selectDate)
        setData({...data, dateBorn: formatDate})
    }
    useEffect(()=>{
        console.log(data);
    },[data])
    return(
        <Container>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
                    <DatePicker 
                        label="" 
                        mask="__/__/____"
                        renderInput={(params)=> <TextField {...params}/>}
                        value={selectDate}
                        onChange={(newValue)=>{handleSetData(newValue)}}
                    />
            </LocalizationProvider>
        </Container>
    )
}
