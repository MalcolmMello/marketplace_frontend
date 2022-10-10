import styled from "styled-components";

export const ViewCategory = styled.div`
    background-color: #FFF;
    border-radius: 15px;
    color: #660C27;
    .container {
        box-shadow: 0px 3px 40px rgb(227,227,227);
        font-weight: bold;
    }
    .top--area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 15px;
        h1 {
            margin: 0
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
        padding: 15px 30px
    }
    .category--items {
        padding: 15px 15px;
    }
`