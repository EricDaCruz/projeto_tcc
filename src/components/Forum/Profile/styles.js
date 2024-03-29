import styled from "styled-components";

export const Container = styled.div`
   padding: 0.5rem 1rem;
   display: flex;
   flex-direction: row-reverse;
   justify-content: space-between;
   flex-wrap: wrap;

   @media (max-width: 700px) {
      flex-direction: column;
   }
`;

export const ContentInputs = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   flex: 1;
`;
export const ContentProfile = styled.div`
   min-width: 200px;
   display: flex;
   justify-content: center;

   label {
      cursor: pointer;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-image: url(${(props) => props.img});
      background-size: cover;
      background-position: center center;

      &:hover{
        div{
            opacity: 1;
            display: flex;
        }
      }

      div {
         display: none;
         opacity: 0;
         align-items: center;
         justify-content: center;
         background-color: rgba(0, 0, 0, 0.5);
         width: 100%;
         border-radius: 50%;
         max-width: 100%;
         max-height: 100%;
         width: 100%;
         height: 100%;
         color: white;
         
         p{
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
         }
      }
   }

   input {
      display: none;
      opacity: 0;
   }
`;

export const Inputs = styled.input`
   box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
   border-radius: 46px;
   border: 1px solid #eff0f7;
   outline: none;
   padding: 0.75rem 0.5rem;
   font-size: 1rem;

   &:focus {
      border: 1px solid #1da87a;
      box-shadow: none;
   }
`;

export const ContentButton = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

export const Button = styled.button`
   padding: 0.25rem 1rem;
   margin-top: 1rem;
   max-width: 200px;
   height: 2rem;
   background-color: ${(props) => (props.delete ? "#ed2939" : props.color)};
   border-radius: 5px;
   border: none;
   outline: none;
   cursor: pointer;
   font-size: 1.125rem;
   color: #fff;
`;
