import styled from 'styled-components'

export const ContentForm = styled.div` 
    border: 1px solid #EFF0F7;
    box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
    border-radius: 34px;

    hr{
        height: 1px;
        background-color: #D9DBE9;
    }
`
export const Inputs = styled.input`
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border: 1px solid #EFF0F7;
    
    &:focus{
       border: 1px solid #1da87a;
       box-shadow: none;    
    }
`
export const Select = styled.select`
    width: 100%;
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border: 1px solid #EFF0F7;
    
    &:focus{
       border: 1px solid #1da87a;
       box-shadow: none;    
    }
`
export const ButtonNextStep = styled.div`
    background:#1DA87A;
    color:#fff;
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
    border-radius: 56px;    
    padding: 15px 30px;

    p{
        font-size: 1rem;
        font-weight: bold;
    }
`