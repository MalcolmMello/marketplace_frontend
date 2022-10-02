import styled from 'styled-components';

export const Menu = styled.main`
    width: 85vw;
    padding: 10px 60px 0px 40px;
    background-color: rgb(244,244,244)
`;

export const AddCategoryArea = styled.section`
    button {
        min-width: 200px;
        padding: 15px;
        border: none;
        border-radius: 15px;
        background-color: #FF175B;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px
    }
`;

export const CategoryArea = styled.section`
    margin-top: 40px;
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgb(227,227,227);
`;

export const NameCategory = styled.div`
    background-color: #FF175B;
    color: #FFF;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    height: 50px;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    font-size: 22px
`;

export const ProductArea = styled.div`
    min-height: 300px;
    background: white;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    position: relative;
    padding: 5px 10px 5px 10px;
    .add--item {
        display: flex;
        align-items: center;
        padding: 3px 10px 3px 10px;
        cursor: pointer;
        border: 1px solid #49081B;
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
