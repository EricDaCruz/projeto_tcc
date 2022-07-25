import { useState, useEffect } from "react";
import { GetItemSessionStorage } from "../../../../services/Storage";
import { GetUser } from "../../../../services/GetInfoUser";
import { FavoriteComment, GetComment } from "../../../../services/FavoriteComment";
import {
   GetQuestion,
   FavoriteQuestion,
} from "../../../../services/FavoriteQuestion";
import { Avatar } from "../../Avatar";
import { Tooltip } from "../../Tooltip";
import { FiStar } from "react-icons/fi";
import { BsStarFill, BsThreeDotsVertical } from "react-icons/bs";

export const Comments = ({
   content,
   stars,
   postDate,
   userId,
   chatUid,
   commentUid,
}) => {
   const [userData, setUserData] = useState({});
   const [isFavorite, setIsFavorite] = useState(false);
   const [starsFavorite, setStarsFavorite] = useState(stars);
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
      const dataComment = await GetComment(uid);
      const userFavorite = GetItemSessionStorage("uid");
      if (isFavorite) {
         const newStars = dataComment.stars.filter(
            (star) => star !== userFavorite
         );
         setStarsFavorite(newStars);
         await FavoriteComment(uid, newStars);
         setIsFavorite(false);
      } else {
         const newStars = [...dataComment.stars, userFavorite];
         setStarsFavorite(newStars);
         await FavoriteComment(uid, newStars);
         setIsFavorite(true);
      }
   };

   return (
      <>
         <div>
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
                     usernameSend={userData.username}
                     commentUid={commentUid}
                     content={content}
                     postDate={dateFormat}
                  />
               </span>
            </div>
            <div className="mt-5 mb-4">
               <p>{content}</p>
            </div>
            <div className="is-flex is-justify-content-flex-end">
               <div className="is-flex" style={{ gap: "1.25rem" }}>
                  <span
                     className="is-flex is-clickable is-align-items-center"
                     style={{ gap: "0.25rem" }}
                     onClick={() => handleFavorite(commentUid)}
                  >
                     {isFavorite ? (
                        <BsStarFill style={{ color: "#FFD400" }} />
                     ) : (
                        <FiStar />
                     )}
                     <p>{starsFavorite.length}</p>
                  </span>
               </div>
            </div>
         </div>
         <hr style={{ backgroundColor: "#eaeaea" }} />
      </>
   );
};
