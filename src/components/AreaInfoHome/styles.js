import styled from 'styled-components'

export const Content = styled.div`
    height: 80vh;
    align-items: center;

    @media only screen 
    and (min-width:769px) 
    and (max-width:1023px) {
            height: 40vh;
    }
`
export const ContentText = styled.div`
    h2{
        color: #000;
        font-size: 2rem;
        margin-bottom: 1.25rem;
    }
    p{
        font-family: 'Roboto';
        font-size: 1.25rem;
    }
`
export const ContentImage = styled.div`
    height: 100%;
    background-image: url('./src/assets/images/img-example-area-info.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
   
`
