import styled from "styled-components";

export const ViewCategory = styled.div`
    background-color: #FFF;
    border-radius: 15px;
    color: #660C27;
    font-weight: 500;
    .container {
        box-shadow: 0px 3px 40px rgb(227,227,227);
    }
    .top--area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 15px;
        h1 {
            margin: 0;
            font-weight: 500;
        };
        button {
            height: 47px;
            background-color: #660C27;
            border: none;
            border-radius: 12px;
            color: #FFF;
            padding: 10px;
            font-weight: bold;
            cursor: pointer
        };
    }
    ul {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        list-style: none;
        li {
            width: 100%
        }
    }
    .category--menu ul {
        padding: 15px 30px;
        color: #A0888F;
    }
    .category--items {
        padding: 15px 15px;

        .options {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            cursor: pointer;
            .active {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: #660C27;

                    font-weight: 500;
                    width: 100%;
                    height: 100%;
                    padding: 3px;
                }
                a:hover {
                    background-color: rgb(227,227,227)
                }
                background: #FFF;
                box-shadow: 0px 5px 40px rgb(215,215,215);
                position: absolute;
                width: 125px;
                height: 80px;
                border-radius: 10px;
                margin-top: -105px
            }
            .choose-option {
                display: none;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-weight: 500;
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-decoration: none;
                    color: #000;
                    width: 100%;
                    height: 100%;
                    padding: 3px;
                }
                a:hover {
                    background-color: rgb(227,227,227)
                }
                background: #FFF;
                box-shadow: 0px 5px 40px rgb(215,215,215);
                position: absolute;
                width: 125px;
                height: 80px;
                border-radius: 10px;
                margin-top: -105px
            }
            .options--item div {
                height: 4px;
                width: 4px;
                border-radius: 50%;
                background-color: #A0888F;
                margin-bottom: 2px
            }
        }
    }
`