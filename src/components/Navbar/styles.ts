import styled from 'styled-components';

export const Navbar = styled.header`
    background-color: var(--darkbeige);
    width: 15vw;
    min-height: 100vh;
    .logo--area {
        display: flex;
        height: 60px;
        width: inherit;
        justify-content: center;
        align-items: center;
        img {
            height: 320%;
            cursor: pointer;
            object-fit: cover;
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
        .active {
            border-left: 6px solid #fff;
            a {
                color: #FFF
            }
        }
        ul {
            padding: 0;
            list-style: none;
            font-weight: 600;
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
                    width: 100%;
                    height: 100%;
                    transition: all ease 0.3s;
                    color: #FFFFFF8F;
                }
            }
            li:hover {
                border-left: 6px solid #fff;
                a {
                    color: #FFF
                }
            }
        }
    }
`;

export const Layout = styled.div`
    display: flex;
    width: 100vw;

    .incomplete {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        width: 100%;

        button {
            width: 300px;
            height: 60px;
            background-color: var(--wine);
            border: none;
            border-radius: 10px;
            color: #FFF;
            font-weight: 600;
            font-size: 17px;
            cursor: pointer;
            margin-top: 20px;
        }
    }
`;