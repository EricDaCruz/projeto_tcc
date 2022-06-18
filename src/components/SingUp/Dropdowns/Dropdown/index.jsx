import { Select } from './styles';

export function Dropdown({value, disabled, name, handleForm, data}) {
  return (
    <Select 
      disabled={name === "city" ? disabled : ''}  
      onChange={e => handleForm(name,e.target.value)}
      className="input is-medium"
      value={value}
    >
        <option value="">Selecione {name === "city" ? "a cidade" : "o estado"}</option>
        {
        data.map(item =>{
            const {label, value} = item
            return <option key={value} value={value}>{label}</option>
        })
        }
                          
    </Select>   
  );
}

