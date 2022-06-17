import styled from 'styled-components'

export const Button = styled.button`
    cursor: pointer;
    background:${props => props.back ? '#fff' : '#1DA87A'};
    color:${props => props.back ? '#1DA87A' : '#fff'};
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
    border-radius: 56px;    
    border: ${props => props.back ? '2px solid #1DA87A' : 'none'};
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: bold;
`