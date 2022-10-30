import styled from "styled-components";

export const ContetnImg = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   img {
      width: 85%;
   }
   img.questions {
      width: 70%;
   }
`;

export const SlideFaq = styled.div`
   padding: 0;

   [class^="number-slide"],
   [class*=" number-slide"] {
      background: #fff;
      font-size: 50px;
      color: #000;
      font-weight: 500;
      height: 200px;
      max-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border-radius: 8px;
      padding: 0.75rem;
    

      h3 {
         font-size: 1.25rem;
         margin-bottom: 1rem;
         font-weight: 700;
      }
      p {
         font-size: 1rem;
         font-weight: 400;
      }
   }

   .wrapper {
      display: flex;
      justify-content: center;
      /* align-items: center; */
      padding-top: 15%;
      height: 100%;
   }
   .scene {
      width: 260px;
      height: 200px;
      perspective: 1000px;
      position: relative;
   }
   .carousel {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: visible;
      transform: translateZ(-288px);
      transform-style: preserve-3d;
   }
   .carousel__cell {
      position: absolute;
      width: 350px;
      left: 10px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.3);
   }
`;
