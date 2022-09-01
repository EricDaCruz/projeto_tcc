import { Theme } from '../../components/Forum/Theme'
import { Outlet } from 'react-router-dom'
import { QuestionsProvider } from '../../contexts/QuestionsContext'
import { CommentsProvider } from '../../contexts/CommentsContext'

export function Forum (){

    return(
        <QuestionsProvider>
            <CommentsProvider>
                <Theme>
                    <Outlet />
                </Theme>
            </CommentsProvider>
        </QuestionsProvider>
        )
}