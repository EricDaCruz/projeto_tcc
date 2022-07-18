import { useState } from 'react'
import { HeaderForum, Nav, NavBtn } from './styles'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
/* Images */
import Icon from '../../../assets/images/icone.png'

export const Header = () => {
   const [showNavbar, setShowNavbar] = useState(false)

   return(
      <HeaderForum className="container is-widescreen">
         <div className="contentImg">
            <img src={Icon} alt="" width="80%"/>
         </div>
         <Nav showNavbar={showNavbar}>
            <Link to="/">
               Entrar
            </Link>
            <NavBtn className="nav-close-btn" onClick={()=>setShowNavbar(false)}>
               <FaTimes />
            </NavBtn>
         </Nav>
         <NavBtn onClick={()=>setShowNavbar(true)}>
            <FaBars />
         </NavBtn>
      </HeaderForum>
   )
}
