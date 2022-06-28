import { useState } from "react"
import { Nav, NavLink, Bars, CloseBars, NavMenu, NavBtn, NavBtnLink } from "./styles"
/* Images */
import icon from '../../../assets/images/icone.png'

export const HeaderArea = () => {
   const [activeBar, setActiveBar] = useState(true)

  return(
      <header className="has-background-danger">
         <Nav>
            <NavLink to="/">
               <img src={icon} alt="" />
            </NavLink>
            { activeBar ? <CloseBars onClick={()=>setActiveBar(false)}/> : <Bars onClick={()=>setActiveBar(true)}/>}
            <NavMenu active={activeBar}>
               <NavBtn to="/">
                  <NavBtnLink to="/sing-up/step1">
                     Cadastre-se
                  </NavBtnLink>
               </NavBtn>
            </NavMenu>
         </Nav>
      </header>
  )
}

