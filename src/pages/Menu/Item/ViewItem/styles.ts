import styled from "styled-components";

export const ViewItem = styled.main`
    padding: 0px 10px;
    margin-top: 30px;
    margin-bottom: 10px;
    .top--area {
        display: flex;
        justify-content: space-between;
        h1 {
            margin: 0
        };
        button {
            height: 47px;
            background-color: #FF175B;
            border: none;
            border-radius: 12px;
            color: #FFF;
            padding: 10px;
            font-weight: bold;
            cursor: pointer
        }
    }
    .product--area ul {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        list-style: none;
    }
    .product--menu ul {
        border-bottom: 1px solid #000;
        padding-bottom: 15px
    }
`