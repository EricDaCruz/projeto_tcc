import {useEffect, useState} from 'react';
import { getCitiesByState, parseCity } from '../../../../services/IbgeApi';
import {Dropdown} from '../Dropdown';

export function DropdownCities({value, disabled, state, handleFormLocalization}) {
  const[cities, setCities] = useState([])

  useEffect(()=>{
    getCitiesByState(state).then(parseCity).then(setCities)
  },[state])

  return(
      <Dropdown value={value} disabled={disabled} name="city" data={cities} handleForm={handleFormLocalization}/>
  );
}
