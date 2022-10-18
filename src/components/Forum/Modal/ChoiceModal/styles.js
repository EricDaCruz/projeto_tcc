import styled from "styled-components";

export const Container = styled.div`
   background: ${(props) =>
      props.type === props.choice
         ? props.type === "yes"
            ? "linear-gradient(to right,#188F67 , #90FAD6, #536A63)"
            : "linear-gradient(to right,#f00 , #FF7A00, #FF6900)"
         : "#d9d9d9"};
   border-radius: 1rem;
   padding: 2px;

`;

export const Content = styled.div`
   min-width: 200px;
   display: flex;
   align-items: center;
   padding: 1.5rem 1rem;
   background-color: #fff;
   border-radius: 1rem;
   gap: 1rem;

   .circle {
      background-color: #d9d9d9;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   p {
      font-weight: 500;
      font-size: 1.125rem;
      color: #170f49;
   }
`;
