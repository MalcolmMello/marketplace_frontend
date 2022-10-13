import styled from "styled-components";

export const ViewItem = styled.section<{options: boolean}>`
    background-color: #FFF;
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgb(227,227,227);
    margin-bottom: 10px;
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
            color: #660C27;
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
        }
    }
    .product--area {
        color: #660C27;
        font-weight: bold;
        padding: 0px 15px;
    };
    .product--area ul {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        list-style: none;
        .name {
            width: 40%;
        }
        li {
            display: flex;
            align-items: center;
            width: 15%;
        }
    }
    .product--menu ul {
        padding-bottom: 15px;
        .options {
            width: 5%
        }
    }
    .product--items {
        padding: 0px 15px;
        .options {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            cursor: pointer;
            width: 5%;
            .choose-option {
                display: ${props => props.options ? 'flex' : 'none'};
                flex-direction: column;
                align-items: center;
                justify-content: center;
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
    .product--items ul {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        list-style: none;
        padding-bottom: 15px;
        color: #660C27;
        .name {
            display: flex;
            align-items: center;
            width: 40%;
            img {
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }
        }
        li {
            display: flex;
            align-items: center;
            width: 15%;
            font-weight: normal;
        }
        .lenght {
            display: flex;
            flex-direction: column;
            align-items: start;
            span {
                color: #949494
            }
        }
    }
`