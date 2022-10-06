import styled from "styled-components";

export const ViewCategory = styled.div`
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
    .category--area ul {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        list-style: none;
        li {
            width: 100%
        }
    }
    .category--menu ul {
        border-bottom: 1px solid #000;
        padding-bottom: 15px
    }
`