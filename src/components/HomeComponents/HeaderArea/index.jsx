import { useState} from 'react'
import {Header, Nav, NavBtn} from './styles'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
/* Images */
import Icon from '../../../assets/images/icone.png'

export const HeaderArea = () => {
   const [showNavbar, setShowNavbar] = useState(false)

   return(
      <Header>
         <div className="contentImg">
            <img src={Icon} alt="" />
         </div>
         <Nav showNavbar={showNavbar}>
            <Link to="/sing-up/step1">
               Cadastre-se
            </Link>
            <NavBtn className="nav-close-btn" onClick={()=>setShowNavbar(false)}>
               <FaTimes />
            </NavBtn>
         </Nav>
         <NavBtn onClick={()=>setShowNavbar(true)}>
            <FaBars />
         </NavBtn>
      </Header>
   )
}
