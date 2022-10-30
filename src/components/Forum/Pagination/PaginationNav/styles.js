import styled from 'styled-components';

export const PagesNavigation = styled.nav`
    padding-bottom: 2rem;
    width: 100%;
    ul{
        display: flex;
        justify-content: center;
        gap: 1rem;

        li{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            list-style: none;
            width: 40px;
            height: 40px;
            background-color: #EDEDED;
            a{
                color: #000;
            }
        }
    }

`