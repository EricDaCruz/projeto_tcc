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
export const ContentOptions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    div{
        flex: 1;
    }
`