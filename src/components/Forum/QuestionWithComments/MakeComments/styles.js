import styled from "styled-components";

export const ContentMakeComments = styled.div`
   form {
      margin-bottom: 1.5rem;

      textarea {
         width: 100%;
         padding: 0.75rem;
         border: 2px solid #eaeaea;
         border-radius: 5px;
         outline: none;
         resize: none;
         &:focus {
            border: 2px solid #188f67;
         }
      }

      div {
         margin-top: 0.5rem;
         button {
            background-color: #1da87a;
            color: #ffffff;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            padding: 0.6rem 1rem;
            border-radius: 0.25rem;
            border: none;
            cursor: pointer;
         }
      }
   }
`;
