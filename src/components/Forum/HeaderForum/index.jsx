import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Avatar } from '../Avatar'
import {FaBars, FaTimes} from 'react-icons/fa'
import { FiBell, FiPlusCircle } from 'react-icons/fi'
import Icon from '../../../assets/images/icone.png'
/*Styles*/
import { Header, ContentHeader, Nav, ContentLinks, NavLinkBtn, NavBtn } from "./styles";

export function HeaderForum() {
   const location = useLocation()
   const [showNavbar, setShowNavbar] = useState(false)
   const [titleHeader, setTitleHeader] = useState('')

   useEffect(() => {
      switch (location.pathname) {
         case '/forum/make-questions':
            setTitleHeader('Nova Questão')
            break;
      
         default:
            setTitleHeader('Minha Questão')
            break;
      }
   },[location])

   return (
      <Header>
         <ContentHeader className="container ">
            <div className="contentImg">
               <img src={Icon} alt="" />
            </div>
            <Nav showNavbar={showNavbar}>
                  <h2>{titleHeader}</h2>
               <ContentLinks className="">
                  <NavLinkBtn to="/forum/make-questions">
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
