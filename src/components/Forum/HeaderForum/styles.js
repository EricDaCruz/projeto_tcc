import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
    height: 80px;
    border-bottom: 1px solid #EAEAEA;

    .contentImg{
        max-width: 20rem;
        width: 100%;
        img{
            width: 4rem;
        }
    }
`
export const ContentHeader = styled.div`
    height: 100%;
    display:flex;
    align-items: center;
    
    @media screen and (max-width: 1024px) {
        justify-content: space-between;
        /* padding: 0 2rem 0 2rem; */
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 1rem;
        color: #808080;
    }

    @media screen and (max-width: 1024px) {
        z-index: 9999;
        position: fixed;
        background-color: #1DA87A;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        transition: 0.3s all ease;
        transform: ${props => props.showNavbar ? '0' : 'translateY(-100vh)'};
        padding-top: 2.5rem;

        h2{
            color: black;
            font-size: 1.5rem;
        }
    }
`
export const ContentLinks = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
    }
`
export const NavLinkBtn = styled(Link)`
    background-color: #1DA87A;
    color: #FFFFFF;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.6rem 1rem;
    border-radius: 0.25rem;
`

export const NavBtn = styled.button`
    font-size: 1.5rem;
    background-color: #1DA87A;
    padding: 5px;
    cursor: pointer;
    background:transparent;
    border:none;
    outline:none;
    color: #000;
    visibility:hidden;
    opacity: 0;
    display: none;

    &.nav-close-btn{
        position:absolute;
        top: 2rem;
        right: 0.3rem;
    }

    @media screen and (max-width: 1024px) {
        visibility: visible;
        opacity: 1;
        display: block;
    }
`