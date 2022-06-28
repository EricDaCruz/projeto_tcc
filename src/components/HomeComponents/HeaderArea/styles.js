import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiX } from 'react-icons/bi'

export const Nav = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* padding: 0.5rem 0; */
    /* margin-top: 0.5rem; */
    /* z-index: 10; */
`
export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    img{
        width: 4.5rem;
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width:768px) {
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        margin-right: 2rem;
    }
`
export const CloseBars = styled(FaTimes)`
    display: none;
    color: #000;

    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        /* top: calc(8vh/2.5); */
        right: 2rem;
        /* transform: translate(-100%, 75%);     */
        font-size: 1.8rem;
        cursor: pointer;
        z-index: 9999;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width:768px) {
        display: block;
        position: absolute;
        top: 0;
        margin-top: ${props => props.active ? '0' : '-100vh'};
        width: 100vw;
        height: 100vh;
        background-color: #00ff00;
        z-index: 999;
        transition: all 0.3s ease;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    @media screen and (max-width:768px) {
        /* display: none; */
    }
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background-color: green;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background-color: green;
    }
`