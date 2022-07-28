import styled from "styled-components";

export const Container = styled.div`
   cursor: pointer;
   max-width: 200px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   background: #ffffff;
   border: 1px solid #d9dbe9;
   box-shadow: 0px 14px 42px rgba(8, 15, 52, 0.06);
   border-radius: 2rem;

   div.content-img{
    img{
        border-radius: 2rem 2rem 0 0;
    }
   }
   div.content-text{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    color: #000000;
    font-size: 1.25rem;
   }
`;
