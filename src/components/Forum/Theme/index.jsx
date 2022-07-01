import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetItemLocalStorage } from '../../../services/LocalStorage'
import { HeaderForum } from '../HeaderForum'
import { Sidebar } from '../Sidebar'

export function Theme({children}){
    const navigate = useNavigate()

    // useEffect(() =>{
    //     const userUid = GetItemLocalStorage('uid')
    //     if(userUid === 'undefined' || userUid === null){
    //         navigate('/')
    //     }
    // },[])

    return(
        <>
            <HeaderForum />
            <div className="is-flex is-justify-content-space-between">
                <Sidebar />
                <div>
                    {children}
                </div>
                <div>
                    Card...
                </div>
            </div>
        </>
    )
}