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

   const titleSubject = (lastPath) => {
     switch (lastPath){
         case 'sociology':
            return 'Sociologia'
         case 'chemistry':
            return 'Química'
         case 'physics':
            return 'Física'
         case 'biology':
            return 'Biologia'
         case 'geography':
            return 'Geografia'
         case 'history':
            return 'História'
         case 'math':
            return 'Matemática'
         case 'english':
            return 'Inglês'
         case 'portuguese':
            return 'Português'
         case 'philosophy':
            return 'Filosofia'
         case 'physical-education':
            return 'Educação Física'	
         case 'ds':
            return 'Desenvolvimento de Sistemas'
         case 'ds-tpa':
            return 'Desenvolvimento de Sistemas | TPA'
         case 'ds-tpi':
            return 'Desenvolvimento de Sistemas | TPI'
         case 'ds-se':
            return 'Desenvolvimento de Sistemas | SE'
         case 'ds-qts':
            return 'Desenvolvimento de Sistemas | QTS'
         case 'ds-pw':
            return 'Desenvolvimento de Sistemas | PW'
         case 'ds-pam':
            return 'Desenvolvimento de Sistemas | PAM'
         case 'ds-ipssi':
            return 'Desenvolvimento de Sistemas | IPSSI'
         case 'ds-fi':
            return 'Desenvolvimento de Sistemas | FI'
         case 'ds-ds':
            return 'Desenvolvimento de Sistemas | DS'
         case 'ds-dd':
            return 'Desenvolvimento de Sistemas | DD'
         case 'ds-bd':
            return 'Desenvolvimento de Sistemas | BD'
         case 'ds-aps':
            return 'Desenvolvimento de Sistemas | APS'
         case 'tma':
            return 'Técnico em Meio Ambiente'
         case 'tma-uos':
            return 'Técnico em Meio Ambiente | UOS'
         case 'tma-star':
            return 'Técnico em Meio Ambiente | STAR'
         case 'tma-pqa':
            return 'Técnico em Meio Ambiente | PQA'
         case 'tma-pea':
            return 'Técnico em Meio Ambiente | PEA'
         case 'tma-tp':
            return 'Técnico em Meio Ambiente | TP'
         case 'tma-pct':
            return 'Técnico em Meio Ambiente | PCT'
         case 'tma-pasp':
            return 'Técnico em Meio Ambiente | PASP'
         case 'tma-pamc':
            return 'Técnico em Meio Ambiente | PAMC'
         case 'tma-mrv':
            return 'Técnico em Meio Ambiente | MRV'
         case 'tma-lei':
            return 'Técnico em Meio Ambiente | LEI'
         case 'tma-gqia':
            return 'Técnico em Meio Ambiente | GQIA'
         case 'tma-ema':
            return 'Técnico em Meio Ambiente | EMA'
         case 'tma-ds':
            return 'Técnico em Meio Ambiente | DS'
         case 'tma-amaas':
            return 'Técnico em Meio Ambiente | AMAAS'
         case 'tma-afqae':
            return 'Técnico em Meio Ambiente | AFQAE'
         case 'tdi':
            return 'Técnico em Design de Interiores'
         case 'tdi-rtm':
            return 'Técnico em Design de Interiores | RTM'
         case 'tdi-rlpa':
            return 'Técnico em Design de Interiores | RLPA'
         case 'tdi-rdpi':
            return 'Técnico em Design de Interiores | RDPI'
         case 'tdi-pir':
            return 'Técnico em Design de Interiores | PIR'
         case 'tdi-pic':
            return 'Técnico em Design de Interiores | PIC'
         case 'tdi-pee':
            return 'Técnico em Design de Interiores | PEE'
         case 'tdi-ipi':
            return 'Técnico em Design de Interiores | IPI'
         case 'tdi-historia-do-mob':
            return 'Técnico em Design de Interiores | Historia do Mob'
         case 'tdi-evadi':
            return 'Técnico em Design de Interiores | EVADI'
         case 'tdi-ergonomia':
            return 'Técnico em Design de Interiores | Ergonomia'
         case 'tdi-cpdi':
            return 'Técnico em Design de Interiores | CPDI'
         case 'tdi-caapi':
            return 'Técnico em Design de Interiores | CAAPI'
         case 'tdi-eamrdi':
            return 'Técnico em Design de Interiores | EAMRDI'
     }
   }

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
            let title = titleSubject(lastPath)
            setTitleHeader(`Disciplina - ${title}`)
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
