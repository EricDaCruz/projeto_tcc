import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Storage } from "../../../services/Storage";
import { Tooltip } from "../Tooltip";
import { Section, ContentImages } from "./styles";
import { Avatar } from "../Avatar";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
/* Classes */
import { User } from "../../../services/User";
import { Question } from "../../../services/Question";
import { Comment } from "../../../services/Comment";

export const Questions = ({
   title,
   postDate,
   content,
   stars,
   userId,
   questionUid,
   commentsLength,
   isInQuestion,
   image,
}) => {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({});
   const [ comments, setComments ] = useState([]);
   const [starsFavorite, setStarsFavorite] = useState(stars);
   const [isFavorite, setIsFavorite] = useState(false);
   const dateFormat = new Date(postDate).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
   });
   const storage = new Storage("uid");
   const userLogged = storage.GetItemSessionStorage(); // Pegando o usuário logado
   const splitContent = content.split("\n");

   useEffect(() => {
      const user = new User("", userId);
      user.GetInfoUser().then((userInfo) => setUserData(userInfo));
      starsFavorite.includes(userLogged)
         ? setIsFavorite(true)
         : setIsFavorite(false);
   }, []);

   useEffect(() => {
      const comment = new Comment("", questionUid);
      async function getComments () {
         const comments = await comment.GetComments()
         setComments(comments)
      }
      getComments()
   }, []);

   const handleFavorite = async () => {
      const question = new Question(questionUid, "", "", "", "", userId);
      const questionData = await question.GetQuestionByUid();
      if (isFavorite) {
         const newStars = questionData.stars.filter(
            (star) => star !== userLogged
         );
         setStarsFavorite(newStars);
         await question.FavoriteQuestion(newStars);
         setIsFavorite(false);
      } else {
         const newStars = [...questionData.stars, userLogged];
         setStarsFavorite(newStars);
         await question.FavoriteQuestion(newStars);
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
               <Avatar src={userData.photoUrl} />
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
                  usernameSendQuestion={userData.username}
                  content={content}
                  postDate={dateFormat}
                  title={title}
                  isQuestion={true}
               />
            </span>
         </div>
         <div className="my-4 ">
            <h2 className="mb-1 is-size-5 has-text-weight-bold">{title}</h2>

            {splitContent ? (
               splitContent.map((content, index) => {
                  return (
                     <p style={{ wordBreaK: "break-word" }} key={index}>
                        {content}
                     </p>
                  );
               })
            ) : (
               <p style={{ wordBreaK: "break-word" }}>content</p>
            )}
         </div>
         {image && (
            <ContentImages>
               <img src={image} alt="Imagem da pergunta" />
            </ContentImages>
         )}
         <div className="is-flex is-justify-content-flex-end">
            <div className="is-flex" style={{ gap: "1.25rem" }}>
               <span
                  className="is-flex is-clickable is-align-items-center"
                  style={{ gap: "0.25rem" }}
                  onClick={() => handleFavorite()}
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
                  <p>{commentsLength || comments.length}</p>
               </span>
            </div>
         </div>
      </Section>
   );
};
