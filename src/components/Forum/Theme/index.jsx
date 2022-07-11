import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetItemLocalStorage } from '../../../services/LocalStorage'
import { HeaderForum } from '../HeaderForum'
import { Sidebar } from '../Sidebar'
import { CardForum } from '../CardForum'
import { ContentAll, Content} from './styles'

export function Theme({children}){
    const navigate = useNavigate()

    // useEffect(() =>{
    //     const userUid = GetItemLocalStorage('uid')
    //     if(userUid === 'undefined' || userUid === null){
    //         navigate('/')
    //     }
    // },[])

    return(
        <ContentAll>
            <HeaderForum />
            <div className="is-flex is-justify-content-space-between">
                <Sidebar />
                <Content>
                    {children}
                </Content>
                <CardForum />
            </div>
        </ContentAll>
    )
}