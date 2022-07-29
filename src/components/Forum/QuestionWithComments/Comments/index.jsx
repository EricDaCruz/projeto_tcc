import { useState, useEffect } from "react";
import { Avatar } from "../../Avatar";
import { Tooltip } from "../../Tooltip";
import { FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
/* Classes */
import { Storage } from "../../../../services/Storage";
import { User } from "../../../../services/User";
import { Comment } from "../../../../services/Comment";

export const Comments = ({
   content,
   stars,
   postDate,
   userId,
   questionUid,
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
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage();

   useEffect(() => {
      const user = new User("", userId);
      user.GetInfoUser()
      .then(userData => setUserData(userData))
      starsFavorite.includes(userLogged) ? setIsFavorite(true) : setIsFavorite(false);
 
   }, []);

   const handleFavorite = async (uid) => {
      const comment = new Comment(commentUid, questionUid)
      const dataComment = await comment.GetCommentByUid();
      if (isFavorite) {
         const newStars = dataComment.stars.filter(
            (star) => star !== userLogged
         );
         setStarsFavorite(newStars);
         await comment.FavoriteComment(newStars);
         setIsFavorite(false);
      } else {
         const newStars = [...dataComment.stars, userLogged];
         setStarsFavorite(newStars);
         await comment.FavoriteComment(newStars);
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
                     questionUid={questionUid}
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
