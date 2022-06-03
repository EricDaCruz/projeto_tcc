import { useEffect } from 'react'
import {ThemeSingUp} from '../../components/SingUp/ThemeSingUp'

export function SingUp({children}){

    return(
        <main>
            <ThemeSingUp>
                {children}
            </ThemeSingUp>
        </main>
    )
}