import styled from 'styled-components';

export const Navbar = styled.header`
    background-color: #A1818A;
    width: 15vw;
    min-height: 100vh;
    .logo--area {
        display: flex;
        height: 60px;
        width: inherit;
        justify-content: center;
        align-items: center;
        img {
            width: 70%;
            height: 70%;
            cursor: pointer;
        };
    };
    .perfil--data {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 150px;
        background-color: #FFF;
        border-radius: 18px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;

        img {
            width: 70px;
            height: 70px;
            border-radius: 50%
        };

        h3 {
            margin: 2px
        }
    }
    .navegation {
        ul {
            padding: 0;
            list-style: none;
            li {
                display: flex;
                justify-content: left;
                padding: 10px;
                margin-bottom: 7px;
                padding-left: 27px;
                border-left: 4px solid transparent;
                background: transparent;
                transition: all ease 0.3s;
                color: #fff;
                cursor: pointer;
                a {
                    text-decoration: none;
                    color: #FFF;
                    width: 100%;
                    height: 100%
                }
            }
            li:hover {
                border-left: 4px solid #fff;
                font-weight: bold;
            }
        }
    }
`