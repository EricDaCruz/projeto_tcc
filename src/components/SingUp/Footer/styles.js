import styled from 'styled-components'

export const Container = styled.footer`
    border-top: 1px solid #D9DBE9;

    div.column{
        div.contentInput{
            flex:1;
            background-color: #fff;
            border: 1px solid #EFF0F7;
            box-shadow: 0px 8px 25px rgba(13, 10, 44, 0.06);
            border-radius: 60px;
            font-size: 1.1rem;

            input{
                border-radius: 60px 0 0 60px;
                border: none;
                outline: none;
            }

            span{
                padding: 7px 20px;
                background: #188F67;
                box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
                border-radius: 56px;
                color: #fff;
                font-size: 1rem;
                cursor: pointer;
            }
        }

        img{
            max-width: 250px;
        }
        p{
            font-size: 1rem;
        }
    }

`