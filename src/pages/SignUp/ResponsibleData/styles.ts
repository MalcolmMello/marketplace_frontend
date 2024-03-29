import styled from "styled-components";

export const Responsible = styled.main`
    h1 {
        color: var(--pink)
    }
    .container {
        max-width: 728px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form {
        .error--message {
            font-size: 12px;
            color: red;
            min-height: 18px;
        }
        width: 70%;
        input {
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
            margin-top: 5px
        }
        .password--area {
            margin-top: 5px;
            .repeat {
                margin-top: 5px;
            }
        }

        .button--area {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;
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