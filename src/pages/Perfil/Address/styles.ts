import styled from "styled-components";

export const Address = styled.main`
    display: flex;
    padding: 10px;
    input {
        width: 50%;
        height: 40px;
        font-size: 17px;
        outline: 0;
        border-radius: 5px;
        border: 1px solid #949494;
        padding: 3px;
    }
    .input--area {
        display: flex;
        flex-direction: column;
        .short--input {
            width: 22.5%
        }
    }
    .input--area--doble {
        display: flex;
        .input--container {
            display: flex;
            flex-direction: column;
            margin-right: 10px;
            input {
                width: 100%;
            }
        }
    }
    .address--area {
        display: flex;
        height: min-content;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        img {
            height: 25px;
            width: 25px;
            margin-right: 10px;
        }
        h3 {
            margin: 0;
            margin-bottom: 2px;
        }
    }
`;