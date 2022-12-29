import styled from "styled-components";

export const CategoryArea = styled.section`
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgb(227,227,227);
    color: var(--wine);
`;

export const NameCategory = styled.div`
    display: flex;
    background-color: #fff;
    color: var(--wine);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 80px;
    font-weight: bold;
    font-size: 22px;
    div {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        box-shadow: 0px 3px 40px rgb(227,227,227);
        padding: 5px 10px 5px 10px;
    }
`;

export const ProductArea = styled.div`
    background: white;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin-bottom: 15px;

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px 0px;
        img {
            height: 60px;
            width: 60px;
        };
        .info {
            width: 80%;
            margin: px 5px;
            h4 {
                margin: 0;
            }
        }
        .price {
            
        }
    }
`;