import styled from "styled-components";
import colors from "../../App.styles";

export const Container = styled.div`
   max-width: 60%;
`;
export const ContentLogin = styled.div`
   h1 {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 800;
      font-size: 2.5rem;
      color: #563939;
   }
   p.titleHeader {
      font-family: "Roboto";
      font-weight: 400;
      color: #563939;
      font-size: 1.3rem;
      margin-bottom: 3rem;
   }
`;
export const ContentLoginInputs = styled.div`
   .field {
      &:nth-child(1) {
         margin-bottom: 2rem;
      }
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
   }
   p {
      text-align: right;
      font-family: "Roboto";
      font-weight: 500;
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
