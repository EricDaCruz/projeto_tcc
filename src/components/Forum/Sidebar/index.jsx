import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiPurchaseTag, BiAward, BiSearch } from 'react-icons/bi'
import { RiQuestionLine, RiChat3Line, RiStarLine, RiLogoutBoxLine } from 'react-icons/ri'
import { Aside, SectionInput, Section, ContentItens } from './styles'

export function Sidebar(){
    const navigate = useNavigate()
    const sibebarMenuItens = [
        {
            path:'/subject',
            name:'Disciplinas',
            icon: <BiPurchaseTag />
        },
        {
            path:'/ranking',
            name:'Ranking',
            icon: <BiAward />
        }
    ]
    const sidebarProfileItens = [
        {
            path: '/my-questions',
            name: 'Minhas Questões',
            icon: <RiQuestionLine />,
            function: 'navigateToMyQuestions'
        },
        {
            path: '/my-answer',
            name: 'Minhas Respostas',
            icon: <RiChat3Line />,
            function: 'navigateToMyAnswer'
        },
        {
            path: '/favorite-questions',
            name: 'Dúvidas Favoritadas',
            icon: <RiStarLine />,
            function: 'navigateToFavoritesQuestions'
        },
        {
            path: '',
            name: 'Desconectar',
            icon: <RiLogoutBoxLine />,
            function: 'logout'
        },
    ]
    const [selectItems, setSelectItems] = useState('')

    const handleNavigateRoutes = (item) => {
        setSelectItems(item)
        switch (item) {
            case '/subject':
                // navigate(item)
                break;
            case '/ranking':
                // navigate(item)
                break;
            case '/my-questions':
                // navigate(item)
                break;
            case '/my-answer':
                // navigate(item)
                break;
            case '/favorite-questions':
                // navigate(item)
                break;
            default:
                console.log('Deslogou');
                break;
        }
    }

    return(
        <Aside>
            <SectionInput>
                <BiSearch />
                <input type="text" placeholder="Pesquisar"/>
            </SectionInput>
            <Section>
               <p>Menu</p>
                {sibebarMenuItens.map((item, key) =>(
                    <ContentItens onClick={()=>handleNavigateRoutes(item.path)} key={key} selected={selectItems === item.path ? true : false}>
                        {item.icon}
                        <span>{item.name}</span>
                    </ContentItens>
                ))
                }
            </Section>
            <Section>
                <p>Perfil</p>
                {sidebarProfileItens.map((item, key) =>(
                    <ContentItens onClick={()=>handleNavigateRoutes(item.path)} key={key} selected={selectItems === item.path ? true : false}>
                        {item.icon}
                        <span>{item.name}</span>
                    </ContentItens>
                ))
                }
            </Section>
        </Aside>
    )
}