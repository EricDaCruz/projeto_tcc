import { Header } from '../Header'
import { Sidebar } from '../SideBar'

export function Theme({children}){
    return(
        <div>
            <Header />
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    )
}