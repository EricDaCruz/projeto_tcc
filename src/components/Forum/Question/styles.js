import styled from  'styled-components'

export const Section = styled.section`
   padding: ${props => props.isInQuestion ? "" :'1.5rem 2rem'};
   background: ${props => props.isInQuestion ? "" :"#ffffff"};
   border: ${props => props.isInQuestion ? "" : "1px solid #eaeaea"};
   box-shadow: ${props => props.isInQuestion ? "" :"2px 1px 5px rgba(0, 0, 0, 0.15)"};
   border-radius: ${props => props.isInQuestion ? "" : "5px"};
`;
