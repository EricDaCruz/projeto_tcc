import styled from "styled-components";

export const ContentAll = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   min-width: 100vw;
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const StyledModal = styled.div`
   max-width: 550px;
   min-height: 350px;
   border-radius: 1rem;
   padding: 0.5rem 1rem;
   background-color: #fff;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 2px solid #1DA87A;
   box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.3);

   .header {
      display: flex;
      min-height: 2rem;
      align-items: center;
      justify-content: flex-end;
      font-size: 1.5rem;
      cursor: pointer;
      color: #1DA87A;
   }
   .content {
      h2 {
         font-size: 1.25rem;
         color: #1DA87A;
         font-weight: bold;
      }
   }
   .actions {
      display: flex;
      justify-content: flex-end;
      gap: 1.5rem;
   }
`;
