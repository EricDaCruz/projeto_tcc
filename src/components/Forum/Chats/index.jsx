import { useState, useEffect } from "react";
import { Question } from "../Question";
import { GetAllChats } from "../../../services/GetChats";


export const Chats = () => {
   const [dataChats, setDataChats] = useState([]);
   // const [userData, setUserData] = useState({});

   useEffect(() => {
      GetAllChats().then((chat) => setDataChats(chat));
   }, []);

   return (
      <>
        {dataChats.length > 0 &&(
         dataChats.map((chat) =>{
            const { title, postDate, content,stars, comments, userId, chatUid } = chat;           
                  return (
                     <Question key={chatUid}
                        title={title}
                        postDate={postDate}
                        content={content}
                        stars={stars}
                        comments={12}
                        userId={userId}
                        chatUid={chatUid}
                     />
                  );
         })
        )}
      </>
   );
};
