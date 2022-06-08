import { useEffect, useState } from "react";
import { getStates, parseState } from "../../../../services/IbgeApi";
import {Dropdown} from '../Dropdown';

export function DropdownStates({handleFormLocalization}) {
  const[states, setStates] = useState([])

  useEffect(()=>{
    getStates().then(parseState).then(setStates)
  },[])

   return (
    <Dropdown name="state" handleForm={handleFormLocalization} data={states}/>
   );
}
