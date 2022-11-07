import { UserLine } from "../../Ranking/UserLine";

export function PaginationRanking({ list, rakingPerPage, currentPage }) {
   //Get current questions
   const indexOfLastRanking = currentPage * rakingPerPage;
   const indexOfFirstRanking = indexOfLastRanking - rakingPerPage;
   const currentRanking = list.slice(indexOfFirstRanking, indexOfLastRanking);

   return (
      <>
         {currentRanking.map((user, index) => {
            return <UserLine user={user} key={user.userId} list={list}/>;
         })}
      </>
   );
}
