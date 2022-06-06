import { useState } from 'react'
import { MdDateRange } from 'react-icons/md'

import { Container } from './styles';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormatDate } from '../../helpers/FormatDate';

export function SelectDate({ data, setData }) {
    const [date, setDate] = useState(new Date());

    const handleSelectDate = (date) => {
        setDate(date)
        let dateFormat = FormatDate(date)
        setData({...data, dateBorn: FormatDate(date)})
        console.log(data);
    }

    return (
        <Container className='control has-icons-right'>
            <DatePicker dateFormat="dd/MM/yyyy" className='input is-rounded is-medium' selected={date} onSelect={(date) => handleSelectDate(date)} />
            <span className="icon is-small is-right">
                <MdDateRange />
            </span>
        </Container>
    );
}
