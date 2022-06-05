import { useEffect } from 'react'
import {ThemeSingUp} from '../../components/SingUp/ThemeSingUp'
import { FormProvider } from '../../contexts/FormContext'


export function SingUp({children}){

    return(
        <main>
            <FormProvider>
                <ThemeSingUp>
                    {children}
                </ThemeSingUp>
            </FormProvider>
        </main>
    )
}