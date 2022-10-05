import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   /* h1{
    text-align: center;
    margin-bottom: 1rem;
  } */
`;

export const Table = styled.table`
   width: 100%;
   max-width: 700px;

   tr {
      background: #EDEDED;

      &:nth-child(even) {
         background-color: lightgray
      }
   }

   td,
   th {
      height: 40px;
      padding: 10px 3px;
   }
`;
