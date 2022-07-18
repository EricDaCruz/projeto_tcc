import styled from "styled-components";

export const CircleProgressBar = styled.span`
   width: 34px;
   height: 34px;
   border-radius: 100%;
   background-color: #188f67;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 500;
   color: #fff;

   @media screen and (max-width: 600px) {
      width: 25px;
      height: 25px;
   }
`;
