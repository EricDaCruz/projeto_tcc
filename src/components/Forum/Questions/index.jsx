import { useState, useEffect } from "react";
import { GetUser } from "../../../services/GetInfoUser";
import {
   GetQuestion,
   FavoriteQuestion,
} from "../../../services/FavoriteQuestion";
import { useNavigate } from "react-router-dom";
import { Storage } from "../../../services/Storage";
import { Tooltip } from "../Tooltip";
import { Section } from "./styles";
import { Avatar } from "../Avatar";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import { GetComments } from "../../../services/GetComments";
/* Classes */
import { User } from "../../../services/User";

export const Questions = ({
   title,
   postDate,
   content,
   stars,
   userId,
   questionUid,
   commentsLength,
   isInQuestion,
}) => {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({});
   const [comments, setComments] = useState([]);
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
      const storage = new Storage("uid");
      const user = new User('', userId);
      const userLogged = storage.GetItemSessionStorage();
      user.GetInfoUser().then(userInfo => setUserData(userInfo));
      starsFavorite.includes(userLogged)
         ? setIsFavorite(true)
         : setIsFavorite(false);
   }, []);
   useEffect(() => {
      GetComments(questionUid).then((comments) => setComments(comments));
   }, []);

   const handleFavorite = async (uid) => {
      const dataChat = await GetQuestion(uid);
      const userFavorite = GetItemSessionStorage("uid");
      if (isFavorite) {
         const newStars = dataChat.stars.filter(
            (star) => star !== userFavorite
         );
         setStarsFavorite(newStars);
         await FavoriteQuestion(uid, newStars);
         setIsFavorite(false);
      } else {
         const newStars = [...dataChat.stars, userFavorite];
         setStarsFavorite(newStars);
         await FavoriteQuestion(uid, newStars);
         setIsFavorite(true);
      }
   };
   
   return (
      <Section className="mb-5" isInQuestion={isInQuestion}>
         <div className="is-flex is-align-items-center is-justify-content-space-between">
            <div
               className="is-flex is-align-items-center"
               style={{ gap: "1rem" }}
            >
               <Avatar />
               <div>
                  <p className="has-text-black" style={{ color: "#808080" }}>
                     {userData.username}
                  </p>
                  <span className="is-size-7	">{dateFormat}</span>
               </div>
            </div>
            <span className="is-clickable">
               <Tooltip
                  userIdSend={userId}
                  questionUid={questionUid}
                  usernameSend={userData.username}
                  content={content}
                  postDate={dateFormat}
                  title={title}
                  isQuestion={true}
               />
            </span>
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
                  onClick={() => handleFavorite(questionUid)}
               >
                  {isFavorite ? (
                     <BsStarFill style={{ color: "#FFD400" }} />
                  ) : (
                     <FiStar />
                  )}
                  <p>{starsFavorite.length}</p>
               </span>

               <span
                  className="is-flex is-clickable is-align-items-center"
                  style={{ gap: "0.25rem" }}
                  onClick={
                     !isInQuestion
                        ? () => navigate(`/forum/question/${questionUid}`)
                        : null
                  }
               >
                  <FiMessageSquare />
                  <p>{commentsLength ? commentsLength : comments.length}</p>
               </span>
            </div>
         </div>
      </Section>
   );
};
