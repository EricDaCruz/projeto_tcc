import { Link } from 'react-router-dom'
import { BiPurchaseTag, BiAward, BiSearch } from 'react-icons/bi'
import { RiQuestionLine, RiChat3Line, RiStarLine } from 'react-icons/ri'
import { Aside } from './styles'

export function Sidebar(){
    const sibebarMenuItens = [
        {
            path:'/disciplinas',
            name:'disciplinas',
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
            icon: <RiQuestionLine />
        },
        {
            path: '/my-answer',
            name: 'Minhas Respostas',
            icon: <RiChat3Line />
        },
        {
            path: '/favorite-questions',
            name: 'Dúvidas Favoritadas',
            icon: <RiStarLine />
        },
        {
            path: '/favorite-questions',
            name: 'Dúvidas Favoritadas',
            icon: <RiStarLine />
        },
    ]

    return(
        <Aside>
            <section>
                <BiSearch />
                <input type="text"/>
            </section>
            <section>
               Menu
                {sibebarMenuItens.map((item, key) =>(
                    <div key={key}>
                        {item.icon}
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                ))
                }
            </section>
            <section>
               Perfil
                {sidebarProfileItens.map((item, key) =>(
                    <div key={key}>
                        {item.icon}
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                ))
                }
            </section>
        </Aside>
    )
}