import { useState } from 'react'
import { Avatar } from './Avatar'
import {FaBars, FaTimes} from 'react-icons/fa'
import { FiBell, FiPlusCircle } from 'react-icons/fi'
import Icon from '../../../assets/images/icone.png'
/*Styles*/
import { Header, ContentHeader, Nav, ContentLinks, NavLinkBtn, NavBtn } from "./styles";

export function HeaderForum() {

   const [showNavbar, setShowNavbar] = useState(false)


   return (
      <Header>
         <ContentHeader className="container ">
            <div className="contentImg">
               <img src={Icon} alt="" />
            </div>
            <Nav showNavbar={showNavbar}>
                  <h2>Minhas Questões</h2>
               <ContentLinks className="">
                  <NavLinkBtn to="make-questions">
                     <FiPlusCircle /> Faça uma pergunta
                  </NavLinkBtn>
                  <FiBell className="is-clickable" color="#808080" size='1.5rem'/>
                  <Avatar src=''/>
               </ContentLinks>
               <NavBtn className="nav-close-btn" onClick={()=>setShowNavbar(false)}>
                  <FaTimes />
               </NavBtn>
            </Nav>
            <NavBtn onClick={()=>setShowNavbar(true)}>
               <FaBars />
            </NavBtn>
         </ContentHeader>
      </Header>
   );
}
