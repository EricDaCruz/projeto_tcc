import styled from "styled-components"

export const Content = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    margin-bottom: 2rem;
    cursor: pointer;
    border: 2px solid black;

    background-image: url(${props => props.src });
    background-size: cover;
    background-position: center center;
`