import styled from "styled-components";

export const Responsible = styled.main`
    h1 {
        color: #FF175B
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
        width: 70%;
        input {
            height: 40px;
            border-radius: 12px;
            border: 1px solid #FF175B;
            padding: 7px;
            font-size: 17px;
        }

        input:focus {
            outline: 1px solid #FF175B;
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
        .description--area {
            margin-top: 20px;

            textarea {
                width: 100%;
                height: 130px;
                border-radius: 12px;
                resize: none;
                border: 1px solid #FF175B;
                padding: 7px;
                font-size: 17px;
            }

            textarea:focus {
                outline: 1px solid #FF175B;
            }
        }

        .button--area {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            button {
                width: 100%;
                height: 49px;
                background-color: #C11849;
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