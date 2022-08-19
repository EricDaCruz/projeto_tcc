import { Select } from './styles';

export function Dropdown({value, disabled, name, handleForm, data, handleChangeData}) {
  return (
    <Select 
      disabled={name === "city" ? disabled : ''}  
      onChange={e => {
        handleForm(e.target.value)
        handleChangeData(e.target.value, name)
      }}
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

