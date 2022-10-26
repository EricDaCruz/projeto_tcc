import { PagesNavigation } from'./styles'


export function PaginationNav({ itensPerPages, totalQuestions, paginate }) {
   let pageNumber = [];

   for (let i = 1; i <= Math.ceil(totalQuestions / itensPerPages); i++) {
      pageNumber.push(i);
   }

   return (
      <PagesNavigation>
         <ul>
            {pageNumber.map((number) => (
               <li key={number} onClick={() =>paginate(number)}>
                  <a>{number}</a>
               </li>
            ))}
         </ul>
      </PagesNavigation>
   );
}
