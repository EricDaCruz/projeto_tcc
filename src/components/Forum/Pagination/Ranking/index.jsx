import { UserLine } from "../../Ranking/UserLine";
import { PaginationNav } from "../PaginationNav";

export function PaginationRanking({ list, rakingPerPage, currentPage }) {
 
   //Get current questions
   const indexOfLastRanking = currentPage * rakingPerPage;
   const indexOfFirstRanking = indexOfLastRanking - rakingPerPage;
   const currentRanking = list.slice(indexOfFirstRanking, indexOfLastRanking);

   return (
      <>
         {currentRanking.map((user) => {
            return (
               <UserLine
                 user={user}
               />
            );
         })}
      </>
   );
}
