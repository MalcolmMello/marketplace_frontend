import styled from "styled-components";

export const ViewItem = styled.section`
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
    }
    .product--items {
        padding: 0px 15px;
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