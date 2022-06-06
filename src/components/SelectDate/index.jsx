import { useState } from 'react'
import { MdDateRange } from 'react-icons/md'

import { Container } from './styles';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function SelectDate({ data, setData }) {
    const [startDate, setStartDate] = useState(new Date());

    const handleSelectDate = (date) => {
        setStartDate(date)
        setData({ ...data, dateBorn: date })
        console.log(data);
    }

    return (
        <Container className='control has-icons-right'>
            <DatePicker dateFormat="dd/MM/yyyy" className='input is-rounded is-medium' selected={startDate} onChange={(date) => handleSelectDate(date)} />
            <span className="icon is-small is-right">
                <MdDateRange />
            </span>
        </Container>
    );
}
