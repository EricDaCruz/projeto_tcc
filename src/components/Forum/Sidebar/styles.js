import styled from 'styled-components'

export const Aside = styled.aside`
    position: fixed;
    background: #fff;
    max-width: 19.25rem;
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1024px){
        max-width: 4rem;
    }
`
export const SectionInput = styled.section`
    margin-top: 1.5rem;
    padding: 0 2rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg{
        font-size: 1.25rem;
    }
    input{
        flex: 1;
        border: none;
        outline: none;
        padding: 5px 5px;
        border-radius: 0.25rem;
        font-size: 1rem;

        &:focus{
            border: 1px solid #188F67;
        }
        &::placeholder{
            font-size: 1rem;
            font-weight: 700;
            color: #000;
        }
    }
    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        input{
            display: none;
        }
    }
`
export const Section = styled.section`
    width: 100%;
    margin-top: 1.5rem;

    p{
        margin-left: 2rem;
        font-size: 1.rem;
        color: #808080;
        margin-bottom: 0.625rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1024px){
        
        p{
            margin-left: 0.5rem;
        }
    }
`

export const ContentItens = styled.div`
    cursor: pointer;
    padding: 0 2rem;
    background: ${props => props.selected ? '#D6EFE7' : 'transparent'};
    border-left: ${props => props.selected ? '5px solid #188F67' : 'transparent'};
    height: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    svg{
        color: ${props => props.selected ? '#188F67' : '#808080'};;
        font-size: 1.25rem;
    }
    span{
        font-size: 1rem;
        font-weight: 700;
        color: #000;
    }

    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        svg{

        }
        span{
            display: none;
            overflow: hidden;
        }
    }
`