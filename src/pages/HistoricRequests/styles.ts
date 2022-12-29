import styled from "styled-components";

export const HistoricRequests = styled.main`
    width: 85vw;
    padding: 10px 60px 0px 40px;
    background-color: rgb(244,244,244);

    .title {
        display: flex;
        justify-content: space-between;
        h1 {
            margin: 0
        }
        p {
            font-weight: bold;
            color: var(--gray);
            margin: 0px
        }
        button {
            height: 47px;
            background-color: var(--wine);
            border: none;
            border-radius: 12px;
            color: #FFF;
            padding: 10px;
            font-weight: bold;
            cursor: pointer
        }
        margin: 0px 0px 30px 0px
    }
`

export const NestedMenu = styled.section`
    background-color: rgb(238,235,238);
    padding: 10px;
    border-radius: 15px;
    .menu {
        list-style: none;
        display: flex;
        padding: 10px 5px 0px 10px;
        height: 55px;
        margin: 0;
        li {
            margin-right: 20px;
            border-bottom: 3px solid transparent;
            cursor: pointer;
            height: 65%;
            a {
                color: var(--gray);
                font-weight: bold;
                text-decoration: none;
                transition: all ease 0.2s;
                font-size: 16px
            }
        };
        a:hover {
            color: var(--wine)
        }
        li:hover {
            border-bottom: 3px solid var(--wine)
        }
    }
`;