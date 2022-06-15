import { Select } from './styles';

export function Dropdown({disabled, name, handleForm, data}) {
  return (
    <Select 
      disabled={name === "city" ? disabled : ''}  
      onChange={e => handleForm(name,e.target.value)}
      className="input is-medium"
    >
        <option value="">Selecione a cidade</option>
        {
        data.map(item =>{
            const {label, value} = item
            return <option key={value} value={value}>{label}</option>
        })
        }
                          
    </Select>   
  );
}

