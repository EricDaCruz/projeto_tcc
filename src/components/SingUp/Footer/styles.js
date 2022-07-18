import styled from "styled-components";

export const Container = styled.footer`
   background-color: #188f67;
   div.container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      @media screen and (max-width: 1000px) {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 2rem;
      }
   }

   @media screen and (max-width: 1150px) {
      padding: 0 2rem;
   }
`;
export const ContainerImg = styled.div`
    @media screen and (max-width: 1000px) {
         display: flex;
         align-items: center;
         flex-direction: column;
      }
   img {
      max-width: 22rem;
      width: 100%;
   }
   p {
      color: #fff;
   }
`;
export const ContainerInput = styled.div`
   max-width: 450px;
   width: 100%;
   div.contentInput {
      flex: 1;
      background-color: #fff;
      border: 1px solid #eff0f7;
      box-shadow: 0px 8px 25px rgba(13, 10, 44, 0.06);
      border-radius: 60px;
      font-size: 1.1rem;

      input {
         border-radius: 60px 0 0 60px;
         border: none;
         outline: none;
      }
      span {
         padding: 7px 20px;
         background: #188f67;
         box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
         border-radius: 56px;
         color: #fff;
         font-size: 1rem;
         cursor: pointer;
      }
   }
`;
