import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 1rem;

   /* h1{
    text-align: center;
    margin-bottom: 1rem;
  } */
`;

export const Table = styled.table`
   width: 100%;
   max-width: 700px;

   th{
      background: #fff;
   }

   tr {
      background: lightgray;

      &:nth-child(even) {
         background-color: #EDEDED
      }
   }

   td,
   th {
      height: 40px;
      padding: 10px 3px;
   }
`;
