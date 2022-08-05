import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5rem 1rem;
    background-color: red;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`

export const ContentInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: blue;
    flex: 1;
`
export const ContentProfile = styled.div`
    min-width: 200px;
    background-color: green;
    display: flex;
    justify-content: center;

    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const Inputs = styled.input`
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border-radius: 46px;
    border: 1px solid #EFF0F7;
    outline: none;
    padding: 0.75rem 0.5rem ;
    
    &:focus{
       border: 1px solid #1da87a;
       box-shadow: none;    
    }
`