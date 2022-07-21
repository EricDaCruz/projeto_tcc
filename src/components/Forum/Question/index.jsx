import { useState, useEffect } from "react";
import { GetUser } from "../../../services/GetInfoUser";
import {
   GetQuestion,
   FavoriteQuestion,
} from "../../../services/FavoriteQuestion";
import { GetItemSessionStorage } from "../../../services/Storage";
import { Section } from "./styles";
import { Avatar } from "../Avatar";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";

export const Question = ({
   title,
   postDate,
   content,
   stars,
   comments,
   userId,
   chatUid,
}) => {
   const [userData, setUserData] = useState({});
   const [starsFavorite, setStarsFavorite] = useState(stars);
   const [isFavorite, setIsFavorite] = useState(false);
   const dateFormat = new Date(postDate).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
   });
   useEffect(() => {
      GetUser(userId).then((user) => setUserData(user));
      starsFavorite.includes(GetItemSessionStorage("uid"))
         ? setIsFavorite(true)
         : setIsFavorite(false);
   }, []);

   const handleFavorite = async (uid) => {
      const dataChat = await GetQuestion(uid);
      const userFavorite = GetItemSessionStorage("uid");
      if(isFavorite){
         const newStars = dataChat.stars.filter((star) => star !== userFavorite);
         setStarsFavorite(newStars);
         await FavoriteQuestion(uid, newStars, dataChat)
         setIsFavorite(false);
      }else{
         const newStars = [...dataChat.stars, userFavorite];
         setStarsFavorite(newStars);
         await FavoriteQuestion(uid, newStars, dataChat)
         setIsFavorite(true);
      }
   };

   return (
         <Section className="mb-5">
            <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
               <Avatar />
               <div>
                  <p className="has-text-black" style={{ color: "#808080" }}>
                     {userData.username}
                  </p>
                  <span className="is-size-7	">{dateFormat}</span>
               </div>
            </div>
            <div className="my-4 ">
               <h2 className="mb-1 is-size-5 has-text-weight-bold">{title}</h2>
               <p>{content}</p>
            </div>
            <div className="is-flex is-justify-content-flex-end">
               <div className="is-flex" style={{ gap: "1.25rem" }}>
                  <span
                     className="is-flex is-clickable is-align-items-center"
                     style={{ gap: "0.25rem" }}
                     onClick={() => handleFavorite(chatUid)}
                  >
                     {isFavorite ? (
                        <BsStarFill style={{ color: "#FFD400"}} />
                     ) : (
                        <FiStar />
                     )}
                     <p>{starsFavorite.length}</p>
                  </span>
                  <span
                     className="is-flex is-clickable is-align-items-center"
                     style={{ gap: "0.25rem" }}
                  >
                     <FiMessageSquare />
                     <p>{comments}</p>
                  </span>
               </div>
            </div>
         </Section>
      );
   }
