import styled from "styled-components";

export const Delivery = styled.main`
    width: 100%;
    height: 100vh;

    .map {
        width: 100%;
        height: 100%
    }

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 999;
        background-color: white;
        width: 180px;
        height: 190px;
        margin-left: 80px;
        margin-top: 10px;
        border-radius: 17px;
        padding: 10px;
        border: 1px solid #949494;

        span {
            font-size: 12px;
            padding: 2px
        }

        h3 {
            margin: 0px
        }

        input {
            width: 100%;
            height: 35px;
            font-size: 17px;
            outline: none;
            border-radius: 10px;
            border: 1px solid #949494;
            padding: 7px;
            margin-top: 5px;
        }

        button {
            width: 100%;
            height: 40px;
            background-color: var(--wine);
            border: none;
            border-radius: 10px;
            color: #FFF;
            font-weight: 500;
            font-size: 17px;
            cursor: pointer;
            margin-top: 10px;
        }
    }
`