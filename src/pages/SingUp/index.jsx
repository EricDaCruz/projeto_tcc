import { useEffect } from 'react'
import { ThemeSingUp } from '../../components/SingUp/ThemeSingUp'
import { FormProvider } from '../../contexts/FormContext'
import { Outlet } from 'react-router-dom'


export function SingUp(){

    return(
        <main>
            <FormProvider>
                <ThemeSingUp>
                    <Outlet />
                </ThemeSingUp>
            </FormProvider>
        </main>
    )
}