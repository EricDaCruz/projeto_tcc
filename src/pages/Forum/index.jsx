import { Theme } from '../../components/Forum/Theme'
import { Outlet } from 'react-router-dom'

export function Forum (){

    return(
        <Theme>
            <Outlet />
        </Theme>
    )
}