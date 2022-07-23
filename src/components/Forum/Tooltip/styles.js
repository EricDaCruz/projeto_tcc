import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 200px;
    padding: 1rem 0.5rem;
    gap: 0.5rem;
    border: 1px solid #eaeaea;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    text-align: left;

    background-color: transparent;
    border: none;
    outline: none;

    cursor: pointer;

    &:hover {
        color: ${props => props.action === "true" && '#0007' };
    }
`