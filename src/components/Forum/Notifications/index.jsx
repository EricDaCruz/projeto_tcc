import { Container, ContentNotifications, Notification, ContentTrash } from "./styles";
import { IoClose } from 'react-icons/io5';
import { BsFillTrashFill } from 'react-icons/bs';

export const Notifications = ({setShowNotifications}) => {
    return(
        <Container>
            <ContentNotifications>
                <div className="is-flex is-justify-content-end mr-3 mt-2"> 
                    <IoClose onClick={()=>setShowNotifications(false)} size="1.5rem" className="is-clickable"/>
                </div>
                <Notification>
                        <div>
                            <h3>eRC Curtiu sua pergunta</h3>
                            <p>Clique aqui para ver qual pergunta ele curtiu</p>
                        </div>
                        <ContentTrash>
                            <BsFillTrashFill/>
                        </ContentTrash>
                </Notification>
                <Notification>
                        <div>
                            <h3>eRC Curtiu sua pergunta</h3>
                            <p>Clique aqui para ver qual pergunta ele curtiu</p>
                        </div>
                        <ContentTrash>
                            <BsFillTrashFill/>
                        </ContentTrash>
                </Notification>
            </ContentNotifications>
        </Container>
    )
};
