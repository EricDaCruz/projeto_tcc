import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
   Container,
   ContentNotifications,
   Notification,
   ContentTrash,
} from "./styles";
import { IoClose } from "react-icons/io5";
import { BsFillTrashFill } from "react-icons/bs";
/* Classes */
import { Notification as NotificationClass } from "../../../services/Notification";

export const Notifications = ({ setShowNotifications, notifications, setNotifications }) => {
 
   const deleteNotification = async (id) => {
      const notification = new NotificationClass(id);
      notification.DeleteNotifications().then(() => {
         const newNotifications = notifications.filter(
            (notification) => notification.id !== id
         );
         setNotifications(newNotifications);
      });
   };

   return (
      <Container>
         <ContentNotifications>
            <div className="is-flex is-justify-content-end mr-3 mt-2">
               <IoClose
                  onClick={() => setShowNotifications(false)}
                  size="1.5rem"
                  className="is-clickable"
               />
            </div>
            {notifications.length > 0 ? (
               notifications.map((notification) => {
                  const {
                     id,
                     createdAt,
                     type,
                     notification: message,
                  } = notification;
                  return (

                        <Notification key={id}>
                           <Link to={`/forum/question/f66357df-81c1-4303-af3c-8a4ac8668149`}>
                              <div>
                                 <h3>{message}</h3>
                                 <p>Ir para a questão</p>
                                 <p>{createdAt}</p>
                              </div>
                           </Link>
                           <ContentTrash>
                              <BsFillTrashFill
                                 onClick={() => deleteNotification(id)}
                              />
                           </ContentTrash>
                        </Notification>
           
                  );
               })
            ) : (
               <div className="mt-3 is-flex is-justify-content-center">
                  <h3 className="is-size-5">Nenhuma notificação 😭</h3>
               </div>
            )}
         </ContentNotifications>
      </Container>
   );
};
