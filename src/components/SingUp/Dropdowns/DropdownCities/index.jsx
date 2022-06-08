import {useEffect, useState} from 'react';
import { getCitiesByState, parseCity } from '../../../../services/IbgeApi';
import {Dropdown} from '../Dropdown';

export function DropdownCities({disabled, formLocalization, handleFormLocalization}) {
  const[cities, setCities] = useState([])

  useEffect(()=>{
    getCitiesByState(formLocalization.state).then(parseCity).then(setCities)
  },[formLocalization])

  return(
      <Dropdown disabled={disabled} name="city" data={cities} handleForm={handleFormLocalization}/>
  );
}
