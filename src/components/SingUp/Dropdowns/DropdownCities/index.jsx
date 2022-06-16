import {useEffect, useState} from 'react';
import { getCitiesByState, parseCity } from '../../../../services/IbgeApi';
import {Dropdown} from '../Dropdown';

export function DropdownCities({value, disabled, formLocalization, handleFormLocalization}) {
  const[cities, setCities] = useState([])

  useEffect(()=>{
    getCitiesByState(formLocalization.state).then(parseCity).then(setCities)
  },[formLocalization])

  return(
      <Dropdown value={value} disabled={disabled} name="city" data={cities} handleForm={handleFormLocalization}/>
  );
}
