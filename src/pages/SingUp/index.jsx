import { useEffect } from 'react'
import {ThemeSingUp} from '../../components/SingUp/ThemeSingUp'

export function SingUp({children}){

    return(
        <main className="container is-widescreen" >
            <ThemeSingUp>
                {children}
            </ThemeSingUp>
        </main>
    )
}