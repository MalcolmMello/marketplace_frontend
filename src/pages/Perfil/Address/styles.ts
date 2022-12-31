import styled from "styled-components";

export const Address = styled.main`
    display: flex;
    padding: 10px;
    form {
        width: 40%;
        margin-right: 20px
    }
    input {
        width: 50%;
        height: 40px;
        font-size: 17px;
        outline: 0;
        border-radius: 5px;
        border: 1px solid var(--gray);
        padding: 3px;
    }
    .input--area {
        display: flex;
        input {
            width: 100%
        }
        .street--area {
            width: 80%;
            margin-right: 15px;
        }
        .number--area {
            width: 20%
        }
    }
    
    .address--area {
        display: flex;
        width: 60%;
        height: min-content;
        font-size: 14px;
        .text {
            margin-top: 0px
        }
        img {
            height: 25px;
            width: 25px;
            margin-right: 10px;

            margin-top: 5px
        }
        h3 {
            margin: 0;
            margin-bottom: 2px;
        }
    }
    button {
        width: 198px;
        height: 49px;
        background-color: var(--wine);
        border: none;
        border-radius: 10px;
        color: #FFF;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        margin-top: 20px;
    }

    .results {
        cursor: pointer;
        padding: 5px;
        height: 300px;
        overflow: auto;
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
`;