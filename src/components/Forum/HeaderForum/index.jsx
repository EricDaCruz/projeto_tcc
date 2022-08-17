import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { validate as uuidValidate } from 'uuid';
import { Avatar } from '../Avatar'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiBell, FiPlusCircle } from 'react-icons/fi'
import Icon from '../../../assets/images/icone.png'
/*Styles*/
import { Header, ContentHeader, Nav, ContentLinks, NavLinkBtn, NavBtn } from "./styles";
/* Classes */
import { Storage } from '../../../services/Storage';
import { User } from '../../../services/User';

export function HeaderForum() {
   const location = useLocation()
   const [showNavbar, setShowNavbar] = useState(false)
   const [titleHeader, setTitleHeader] = useState('')
   const [avatar, setAvatar] = useState('')
   const userLogged = new Storage('uid').GetItemSessionStorage()

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
            return 'Desenvolvimento de Sistemas | Técnicas em Programação e Algoritmos'
         case 'ds-se':
            return 'Desenvolvimento de Sistemas | Sistemas Embarcados'
         case 'ds-qts':
            return 'Desenvolvimento de Sistemas | Qualidade e Teste de Software'
         case 'ds-pw':
            return 'Desenvolvimento de Sistemas | Programação Web'
         case 'ds-pam':
            return 'Desenvolvimento de Sistemas | Programação de Aplicativos Mobiles'
         case 'ds-ipssi':
            return 'Desenvolvimento de Sistemas | Internet, Protocolos e Segurança de Sistemas da Informação'
         case 'ds-fi':
            return 'Desenvolvimento de Sistemas | Fundamentos da Informática'
         case 'ds-ds':
            return 'Desenvolvimento de Sistemas | Desenvolvimento de Sistemas'
         case 'ds-dd':
            return 'Desenvolvimento de Sistemas | Design Digital'
         case 'ds-bd':
            return 'Desenvolvimento de Sistemas | Banco de Dados'
         case 'ds-aps':
            return 'Desenvolvimento de Sistemas | Análise e Projeto de Sistemas'
         case 'tma':
            return 'Técnico em Meio Ambiente'
         case 'tma-uos':
            return 'Técnico em Meio Ambiente | Uso, Ocupação e Conservação do Solo'
         case 'tma-star':
            return 'Técnico em Meio Ambiente | Sistemas de Tratamentos de Água e Resíduos'
         case 'tma-pqa':
            return 'Técnico em Meio Ambiente | Prática de Química Ambiental'
         case 'tma-pea':
            return 'Técnico em Meio Ambiente | Projetos em Educação Ambiental'
         case 'tma-tp':
            return 'Técnico em Meio Ambiente | Tecnologia de Processo'
         case 'tma-pct':
            return 'Técnico em Meio Ambiente | Práticas da Ciência da Terra'
         case 'tma-pasp':
            return 'Técnico em Meio Ambiente | Poluição Ambiental e Saúde Pública'
         case 'tma-pamc':
            return 'Técnico em Meio Ambiente | Poluição Atmosférica, Meteorologia e Clima'
         case 'tma-mrv':
            return 'Técnico em Meio Ambiente | Manejo e Recuperação Ambiental'
         case 'tma-lei':
            return 'Técnico em Meio Ambiente | Leitura Espacial e Interpretação de mapas'
         case 'tma-gqia':
            return 'Técnico em Meio Ambiente | Gestão Química e Impactos Ambientais'
         case 'tma-ema':
            return 'Técnico em Meio Ambiente | Energia'
         case 'tma-ds':
            return 'Técnico em Meio Ambiente | Desenvolvimento de Sistemas'
         case 'tma-amaas':
            return 'Técnico em Meio Ambiente | Análise Microbiológica da Água Ar e Solo'
         case 'tma-afqae':
            return 'Técnico em Meio Ambiente | Análise Físico Química da Água e Efluentes'
         case 'tdi':
            return 'Técnico em Design de Interiores'
         case 'tdi-rtm':
            return 'Técnico em Design de Interiores | Representação Técnica do Mobiliário I e II'
         case 'tdi-rlpa':
            return 'Técnico em Design de Interiores | Representação da Linguagem Projetiva e Arquitetônica I e II'
         case 'tdi-rdpi':
            return 'Técnico em Design de Interiores | Representação Digital de Projetos de Interiores I e II'
         case 'tdi-pir':
            return 'Técnico em Design de Interiores | Projetos de Interiores Residenciais'
         case 'tdi-pic':
            return 'Técnico em Design de Interiores | Projetos de Interiores Comerciais'
         case 'tdi-pee':
            return 'Técnico em Design de Interiores | Projeto de Espaços Efêmeros'
         case 'tdi-ipi':
            return 'Técnico em Design de Interiores | Ilustração no Projeto de Interiores'
         case 'tdi-historia-do-mob':
            return 'Técnico em Design de Interiores | História do Mobiliário'
         case 'tdi-evadi':
            return 'Técnico em Design de Interiores | Expressões Visuais Aplicadas ao Design de Interiores I e II'
         case 'tdi-ergonomia':
            return 'Técnico em Design de Interiores | Ergonomia'
         case 'tdi-cpdi':
            return 'Técnico em Design de Interiores | Composição no Projeto de Design de Interiores'
         case 'tdi-caapi':
            return 'Técnico em Design de Interiores | Conforto Ambiental Aplicado ao Projeto de Interiores'
         case 'tdi-eamrdi':
            return 'Técnico em Design de Interiores | Estudo e Aplicação dos Materiais e Revestimentos no Design de Interiores'
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
         case 'my-answer':
            setTitleHeader('Minhas Respostas')
            break;
         case lastPath:
            if(uuidValidate(lastPath)){
               setTitleHeader('Questão')
            }else{
               let title = titleSubject(lastPath)
               setTitleHeader(`Disciplina - ${title}`)
            }
            break;
         default:
            setTitleHeader('Minha Questão')
            break;
      }
      pathNameSplit[2] === 'user' && setTitleHeader('Perfil')
   },[location])
   useEffect(() => {
      const user = new User("",userLogged)
      user.GetInfoUser().then(res => setAvatar(res.photoUrl)) 
   },[])

   

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
                  <Link to={`/forum/user/${userLogged}`}>
                     <Avatar src={avatar}/>
                  </Link>
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
