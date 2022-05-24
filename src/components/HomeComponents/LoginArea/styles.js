import styled from "styled-components";
import { colors } from "../../../App.styles";

export const Container = styled.div`
   @media (max-width: 768px){
      display: flex;
      flex-direction: column;
      align-items:center;
      text-align: center;
     
   }
`

export const ContentLogin = styled.div`
   width: 65%;

   form{
      width:100%;
   }

   @media (min-width: 769px) and
   (max-width: 1023px) {
      width: 100%;
   }

   form{
      div.contentInput{
         background-color: #E3E3E3;
         height: 3rem;
         border-radius: 8px;

         input{
            @media (min-width: 769px) and
            (max-width: 1023px) {
               width: 100%;
            }
            width: 90%;   
            background: transparent;
            height: 2.75rem;
            border: none;
            outline: none;
            &::placeholder {
               color: #969696;
               font-size: 1.25rem;
            }
         }
      }
   }
`;
export const ContentLoginInputs = styled.div`
      input {
         background-color: #e3e3e3;
         outline: none;
         &:focus {
            border: 0;
            border: 2px solid ${colors.green};
            box-shadow: none;
         }
         &::placeholder {
            color: #969696;
         }
      }
      span {
        svg{
            color: #666666; 
        }
      }
   
   p {
      font-family: "Roboto";
      color: #12694c;
      cursor: pointer;
   }
`;
export const ContentButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 3rem;
   margin-bottom: 3rem;

   button {
      background-color: ${colors.green};
      width: 150px;
      height: 45px;
      border-radius: 10px;

      font-family: "Roboto";
      font-weight: 600;
      letter-spacing: 1px;
      color: #ffffff;
      opacity: 1;
      transition: all ease 0.3s;

      &:hover {
         color: #ffffff;
         opacity: 0.6;
      }
   }
`;
export const ContentOthersLogin = styled.div`
   p {
      text-align: center;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      color: #828282;
   }
   p.singUp {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      color: #563939;
      a {
         font-family: "Roboto";
         font-style: normal;
         font-weight: 800;
         color: #12694c;
         cursor: pointer;
      }
   }
`;
export const ColSocialMedia = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-top: 1.5rem;
   margin-bottom: 2rem;

   .socialMedia-item {
      cursor: pointer;
      &:nth-child(2) {
         color: #1278f3;
      }
      svg {
         width: 53px;
         height: 53px;
      }
   }
`;
export const ImageLogin = styled.div`
   background-image: url("./src/assets/images/Bg.png");
   background-size: 100%;
   background-repeat: no-repeat;
   background-position: center;
`;
