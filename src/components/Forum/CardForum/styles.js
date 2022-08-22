import styled from 'styled-components'

export const Content = styled.div`
    background-color: #fff;
    margin: 2rem 1rem 0 0;
    padding: 1.5rem 1.25rem;
    max-width: 16rem;
    width: 100%;
    max-height: 300px;
    border: 1px solid #EAEAEA;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 1200px) {
        display: none;
        opacity: 0;
        visibility: hidden;
    }

    section{

        div.headerContent{
            width: 100%;
            padding-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            border-bottom: 1px solid #EAEAEA;  

            svg{
                color: #808080;
                font-size: 1.25rem;
            }
        }
        div.content{
            ul li,
            ul li a{
                color: #1682FD;
            }
        }
    }
`


