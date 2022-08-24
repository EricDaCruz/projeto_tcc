import styled from "styled-components";

export const Container = styled.div`
   position: absolute;
   top: 80px;
   right: 0;
   min-width: 100vw;
   width: 100%;
   min-height: 100vh;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
   display: flex;
   justify-content: flex-end;
`;
export const ContentNotifications = styled.div`
   overflow-y: scroll;
   border-top: 1px solid #ccc;
   max-width: 400px;
   width: 100%;
   height: 100%;
   background-color: #fff;
   display: flex;
   flex-direction: column;
`;
export const Notification = styled.div`
   cursor: pointer;
   border-bottom: 1px solid #ccc;
   width: 100%;
   min-height: 100px;
   display: flex;
   justify-content: space-around;
   align-items: center;

   div {
      h3 {
         font-size: 1.2rem;
      }
      p {
         font-size: 0.8rem;
      }
   }
`;

export const ContentTrash = styled.div`
   font-size: 1.2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.3s ease;

   &:hover {
      color: #ed2939;
      transform: scale(1.5);
   }
`;
