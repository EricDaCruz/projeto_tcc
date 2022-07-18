import styled from 'styled-components'

export const HeaderForum = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 1150px){
        padding: 0 2rem;
    }

    .contentImg{
        width: 5rem;
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
    margin-right: 2rem;

    &.nav-close-btn{
        position:absolute;
        top: 2rem;
        right: 2rem;
    }

    @media screen and (max-width: 1024px) {
        visibility: visible;
        opacity: 1;
        display: block;
    }
`

// export const Button = styled.div`
//     background:#1DA87A;
//     box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
//     border-radius: 56px;
//     padding: 15px 30px;
    
//     a{
//         color: #fff;
//         font-size: 1rem;
//         font-weight: bold;
//         text-decoration: none;
//     }
// `