import styled from 'styled-components';

export const Perfil = styled.main`
    width: 100%;
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
`;

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
        .active {
            a {
                color: var(--wine)
            }
            border-bottom: 3px solid var(--wine)
        }
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

export const CategoryArea = styled.section`
    margin-top: 40px;
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgb(227,227,227);
`;

export const NameCategory = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #000;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 80px;
    border-bottom: 1px solid var(--gray);
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    font-size: 22px
`;

export const ProductArea = styled.div`
    min-height: 300px;
    background: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    position: relative;
    padding: 5px 10px 5px 10px;
    .add--item {
        display: flex;
        align-items: center;
        padding: 3px 10px 3px 10px;
        cursor: pointer;
        border: 1px solid var(--darkwine);
        border-radius: 15px;
        position: absolute;
        bottom: 7px;
        font-size: 14px;
        h2 {
            margin: 0px;
            margin-right: 10px
        }
    }
`;
