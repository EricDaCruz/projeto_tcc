import { useEffect, useState } from "react";
import { getStates, parseState } from "../../../../services/IbgeApi";
import {Dropdown} from '../Dropdown';

export function DropdownStates({ value, handleFormLocalization, handleChangeData}) {
  const[states, setStates] = useState([])

  useEffect(()=>{
    getStates().then(parseState).then(setStates)
  },[])

   return (
    <Dropdown value={value} handleChangeData={handleChangeData} name="state" handleForm={handleFormLocalization} data={states}/>
   );
}
