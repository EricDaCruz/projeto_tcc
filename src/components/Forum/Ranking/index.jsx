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
import { PaginationRanking } from "../Pagination/Ranking";
import { PaginationNav } from "../Pagination/PaginationNav";

export function Ranking() {
   const [ranking, setRanking] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [rankingPerPage, setRankingPerPage] = useState(15);

   useEffect(() => {
      const user = new User();
      user.GetAllUsers().then((users) => {
         const ranking = sortUserByQuestionsAsked(users);
         setRanking(ranking);
      });
   }, []);

   return (
      <Container>
         <h1 className="mb-5 is-size-4">
            Usuários que mais fizeram perguntas 🥰
         </h1>
         <Table className="mb-4">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th className="has-text-centered">
                     <BsQuestionLg />
                  </th>
                  <th className="has-text-centered">
                     <BsStarFill />
                  </th>
                  <th className="has-text-centered">
                     <FiMessageSquare fill="#363636" />
                  </th>
               </tr>
            </thead>
            <tbody>
               <PaginationRanking list={ranking} rakingPerPage={rankingPerPage} currentPage={currentPage}/>
            </tbody>
         </Table>
         <PaginationNav 
            itensPerPages={rankingPerPage}
            totalItens={ranking.length}
            paginate={setCurrentPage}
         />
      </Container>
   );
}
