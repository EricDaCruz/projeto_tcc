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
  .container-slider {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .keen-slider {
    height: 400px;
    border-radius: 10px;
  }

  [class^="number-slide"],
  [class*=" number-slide"] {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 300px;
    max-height: 100vh;

    .content-text{
      color: #000;
      text-align: center;
      max-width: 80%;

      h3{
         font-size: 1.75rem;
         font-weight: bold;
      }
      p{
         font-size: 1.25rem;
         font-weight: normal;
         margin-top: 30px;
      }
    }
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #000;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(0, 0, 0, 0.5);
  }
`;
