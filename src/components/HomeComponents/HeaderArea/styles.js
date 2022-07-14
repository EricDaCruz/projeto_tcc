import styled from 'styled-components'

export const Header = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin-top: 1rem;

    .contentImg{
        width: 5rem;
        @media screen and (max-width: 1200px){
            margin-left: 3rem;
        }
    }
`
export const Nav = styled.nav`
    a{
        background-color: #1DA87A;
        border-radius: 100px;
        padding: 0.8rem 2rem;
        color: #FFFFFF;
        font-weight: bold;
        letter-spacing: 0.2px
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
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
        transition: 0.3s all ease;
        transform: ${props => props.showNavbar ? '0' : 'translateY(-100vh)'};
    }
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