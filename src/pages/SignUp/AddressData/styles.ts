import styled from "styled-components";

export const Responsible = styled.main`
    h1 {
        color: var(--pink)
    }
    .container {
        max-width: 1024px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .map {
            width: 480px;
            height: 480px
        }
    }

    .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .form {
        width: 50%;
        .inputs {
            display: flex;
            .first {
                width: 80%
            }
            .second {
                width: 20%;
                margin-left: 5px;
            }
        }
        .results {
            cursor: pointer;
            padding: 5px;
            .result {
                margin-bottom: 11px;
                .place {
                    font-size: 15px;
                    font-weight: 500;
                    transition: all ease 0.2s
                }
                .name {
                    font-size: 12px
                }
            }
            .result:hover {
                .place {
                    color: var(--pink)
                }
            }
        }
        input {
            width: 100%;
            height: 40px;
            border-radius: 12px;
            border: 1px solid var(--pink);
            padding: 7px;
            font-size: 17px;
        }

        input:focus {
            outline: 1px solid var(--pink);
        }

        .input--area {
            display: flex;
            flex-direction column
        }
        .two--inputs {
            display: flex;
            justify-content: space-between;
            margin-top: 10px
        }
        .password--area {
            margin-top: 10px
        }

        .button--area {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            button {
                width: 100%;
                height: 49px;
                background-color: var(--pink);
                border: none;
                border-radius: 10px;
                color: #FFF;
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }
`;