import { useEffect, useState } from "react";
import { Container, Table } from "./styles";
/* Icons */
import { BsQuestionLg, BsStarFill } from "react-icons/bs";
import { FiMessageSquare, FiStar } from "react-icons/fi";

/* Sort */
import { sortUserByQuestionsAsked } from "../../../helpers/Sort";
/* Class */
import { User } from "../../../services/User";
import { UserLine } from "./UserLine";

export function Ranking() {
   const [ranking, setRanking] = useState([]);

   useEffect(() => {
      const user = new User();
      user.GetAllUsers().then((users) => {
         const ranking = sortUserByQuestionsAsked(users);
         setRanking(ranking);
      });
   }, []);

   const handleSortRanking = (sortBy) => {
      switch (sortBy) {
         case "questions":
            const rankingByQuestion = sortUserByQuestionsAsked(ranking)
            setRanking(rankingByQuestion)
            break;
         case "stars":
            const rankingByStar = sortUserByStars(ranking)
            setRanking(rankingByStar)
            break;
         case "comments":
            const rankingByComments = sortUserByComments(ranking)
            setRanking(rankingByComments)
            break;
      }
   }

   return (
      <Container>
         <h1 className="mb-5 is-size-4">
            Usuários que mais fizeram perguntas 🥰
         </h1>
         <Table>
            <thead>
               <tr>
                  <th>Username</th>
                  <th className="has-text-centered">
                     <BsQuestionLg />
                  </th>
                  <th className="has-text-centered">
                     <BsStarFill />
                  </th>
                  <th className="has-text-centered">
                     <FiMessageSquare fill="#363636"/>
                  </th>
               </tr>
            </thead>
            <tbody>
               {ranking.map((user, key) => (
                  <UserLine key={key} user={user} />
               ))}
            </tbody>
         </Table>
      </Container>
   );
}
