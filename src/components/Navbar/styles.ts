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