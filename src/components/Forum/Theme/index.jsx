import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Storage } from '../../../services/Storage'
import { HeaderForum } from '../HeaderForum'
import { Sidebar } from '../Sidebar'
import { CardForum } from '../CardForum'
import { ContentAll, Content} from './styles'

export function Theme({children}){
    const navigate = useNavigate()

    useEffect(() =>{
        const storage = new Storage("uid")
        const userUid = storage.GetItemSessionStorage()
        if(userUid === 'undefined' || userUid === null){
            navigate('/')
        }
    },[])

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