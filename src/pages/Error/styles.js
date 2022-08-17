import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;

   img {
      max-width: 600px;
      margin-bottom: 1rem;
   }

   a {
      background-color: #188f67;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      color: #fff;
      text-decoration: none;

      &:hover {
         background-color: #0f6d4d;
      }
   }
`;
