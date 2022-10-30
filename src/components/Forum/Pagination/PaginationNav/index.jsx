import { PagesNavigation } from'./styles'


export function PaginationNav({ itensPerPages, totalItens, paginate }) {
   let pageNumber = [];

   for (let i = 1; i <= Math.ceil(totalItens / itensPerPages); i++) {
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
