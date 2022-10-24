import styled from "styled-components";

export const ContentAll = styled.div`
   background-color: rgba(45, 43, 43, 0.5);
   position: absolute;
   top: 0;
   left: 0;
   min-width: 100vw;
   min-height: ${(props) => props.height}px;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 99;
   overflow: hidden;
`;

export const StyledModal = styled.div`
   z-index: 999;
   max-width: 750px;
   width: 100%;
   min-height: 600px;
   border-radius: 2rem;
   border: 1px solid #eff0f7;
   padding: 4rem 0;
   background-color: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
   box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);

   h1 {
      font-weight: 700;
      font-size: 2rem;
      text-align: center;
      color: #170f49;
      text-align: center;
      margin-bottom: 4rem;
   }
   h2 {
      font-weight: 700;
      font-size: 1.5rem;
      color: #170f49;
      text-align: center;
      margin-bottom: 0.5rem;
   }
   P {
      font-weight: 400;
      font-size: 1.125rem;
      color: #6f6c90;
      text-align: center;
   }

   .choices {
      display: flex;
      gap: 3rem;
      margin: 4rem;

      @media screen and (max-width: 600px) {
         flex-direction: column;
      }
   }

   .content-btn {
      display: flex;
      width: 100%;
      justify-content: flex-end;
   }

   button {
      background: #188f67;
      box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
      border-radius: 56px;
      border: none;
      padding: 0.75rem 2rem;
      font-weight: 700;
      font-size: 1.125rem;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
   }
`;
