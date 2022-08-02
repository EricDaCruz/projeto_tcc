import styled from "styled-components"

export const Content = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 2rem;
    cursor: pointer;
    border: ${props => props.photoSelect === props.src && "3px solid #1DA87A"};
    box-shadow: ${props => props.photoSelect !== props.src && "3px 4px 6px 2px rgba(0, 0, 0,0.3)"};

    background-image: url(${props => props.src });
    background-size: cover;
    background-position: center center;
`