import styled from "styled-components";

export const RequestItem = styled.div`
    font-size: 17px;
    .top--area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        background-color: #FFF;
        box-shadow: 0px 0px 30px rgb(227,227,227);
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 10px;
    }
    .address {
        display: flex;
        align-items: center;
        background-color: #FFF;
        box-shadow: 0px 0px 30px rgb(227,227,227);
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 10px;
        font-size: 16px;
    }
    .request--data {
        background-color: #FFF;
        box-shadow: 0px 0px 30px rgb(227,227,227);
        margin-bottom: 20px;
        border-radius: 10px;
        .status {
            display: flex;
            align-items: center;
            height: 70px;
            border-bottom: 1px solid var(--gray);
            padding: 10px;
            h4 {
                margin: 0
            }
        }
        .item {
            display: flex;
            padding: 10px;
            ul {
                display: flex;
                justify-content: space-between;
                list-style: none;
                width: 100%;
                padding: 0;
                .product--name {
                    font-weight: bold;
                }
                .price {
                    display: flex;
                    justify-content: end;
                    width: 80%;
                }
            }
        }
        .total {
            display: flex;
            padding: 10px;
            justify-content: space-between;
            border-top: 1px solid var(--gray);
            .title {
                font-weight: bold
            }
        }
    }
    .bottom--area {
        display: flex;
        justify-content: end;
        border-top: 1px solid var(--gray);
        padding-top: 10px;
        .button--area {
            padding: 5px;
            button {
                margin-left: 10px;
                width: 200px;
                height: 50px;
                border-radius: 10px;
                border: none;
                font-weight: bold;
                font-size: 16px;
                cursor: pointer;
            }
            .cancel {
                background: none;
                border: 1px solid var(--wine);
                color: var(--wine)
            }
            .confirm, .send, .ready {
                background: var(--wine);
                color: white
            }
        }
    }
`