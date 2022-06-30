import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetItemLocalStorage } from '../../../services/LocalStorage'
import { HeaderForum } from '../HeaderForum'
import { Sidebar } from '../SideBar'

export function Theme({children}){
    const navigate = useNavigate()

    useEffect(() =>{
        const userUid = GetItemLocalStorage('uid')
        if(userUid === 'undefined' || userUid === null){
            navigate('/')
        }
    },[])

    return(
        <div>
            <HeaderForum />
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    )
}