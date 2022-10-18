import styled from 'styled-components'

export const Container = styled.div`
    min-width: 280px;
    border: 2px solid ${props => props.selected ? '#25cd89' : '#EFF0F7'};
    box-shadow: 0px 2px 11px rgba(69, 65, 164, 0.06), 0px 4px 10px rgba(31, 37, 89, 0.07);
    border-radius: 1rem;

    p{
        font-weight: 500;
    }
`