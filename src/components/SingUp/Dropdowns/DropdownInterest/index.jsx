import {Select} from './styles'

export function DropdownInterest({value, onChange}){
    return(
        <Select value={value} onChange={onChange} className="input is-medium">
            <option value="0">Desenvolvimento de Sistema</option>
            <option value="1">Web Design</option>
            <option value="2">Marketing</option>
            <option value="3">Outros</option>
        </Select>
    )
}