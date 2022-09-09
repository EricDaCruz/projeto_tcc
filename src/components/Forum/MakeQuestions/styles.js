import styled from "styled-components";
import arrowSelect from "../../../assets/images/arrow-select.png";

export const Form = styled.form`
   padding: 1.5rem 2rem;
   background: #ffffff;
   border: 1px solid #eaeaea;
   box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.15);
   border-radius: 5px;

   display: flex;
   flex-direction: column;
   gap: 1.25rem;

   select,
   input,
   textarea {
      padding: 0.75rem;
      border: 2px solid #eaeaea;
      border-radius: 5px;
      outline: none;
      resize: none;
      &:focus {
         border: 2px solid #188f67;
      }
   }

   select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url(${arrowSelect}) 98.5% 50% no-repeat #fff;
   }
`;
export const ContentImages = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

   div{
      display: flex;

      svg{
         font-size: 1.5rem;
         cursor: pointer;
      }
      
      img{
         max-width: 300px;
      }
   }

`
export const ContentButtons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    input[type="file"] {
         display: none;
         visibility: hidden;
    }
`
export const Label = styled.label`
 cursor: pointer;
   padding: 0.75rem 1rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.75rem;
   border-radius: 5px;
   border: none;
   outline: none;
   background: rgba(${(props) => props.bgColor});
   color: ${(props) => (props.color === "#808080" ? "#808080" : "#FFF")};
   font-weight: ${(props) => (props.color === "#808080" ? "400" : "900")};
   transition: .3s all ease;
   svg{
    font-size: 1rem;
   }
   &:hover{
    opacity: 0.6;
   }
`
export const Button = styled.button`
   cursor: pointer;
   padding: 0.75rem 1rem;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.75rem;
   border-radius: 5px;
   border: none;
   outline: none;
   background: rgba(${(props) => props.bgColor});
   color: ${(props) => (props.color === "#808080" ? "#808080" : "#FFF")};
   font-weight: ${(props) => (props.color === "#808080" ? "400" : "900")};
   transition: .3s all ease;
   svg{
    font-size: 1rem;
   }
   &:hover{
    opacity: 0.6;
   }
`;
