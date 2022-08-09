import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`

export const ContentInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
`
export const ContentProfile = styled.div`
    min-width: 200px;
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
    font-size: 1rem;
    
    &:focus{
       border: 1px solid #1da87a;
       box-shadow: none;    
    }
`

export const ContentButton = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
` 

export const Button = styled.button`
    padding: 0.25rem 1rem; 
    margin-top: 1rem;
    max-width: 200px;
    height: 2rem;
    background-color: ${props => props.delete ? 'red' : 'green'};
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.125rem;
    color: #fff;
`