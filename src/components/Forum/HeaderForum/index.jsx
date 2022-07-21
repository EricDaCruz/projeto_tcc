import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
      const pathName = location.pathname
      const pathNameSplit = pathName.split('/')
      const lastPath = pathNameSplit[pathNameSplit.length - 1]
      switch (lastPath) {
         case 'make-questions':
            setTitleHeader('Nova Questão')
            break;
         case 'chats':
            setTitleHeader('Questões já feitas')
            break;
         case 'subjects':
            setTitleHeader('Disciplinas')
            break;
         case 'favorite-questions':
            setTitleHeader('Questões Favoritadas')
            break;
         case 'my-questions':
            setTitleHeader('Minhas Questões')
            break;
         case lastPath:
            setTitleHeader(`Disciplina - ${lastPath}`)
            break;
         default:
            setTitleHeader('Minha Questão')
            break;
      }
   },[location])

   

   return (
      <Header>
         <ContentHeader className="container ">
            <Link to="chats">
               <div className="contentImg">
                  <img src={Icon} alt="" width="80%"/>
               </div>
            </Link>
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
