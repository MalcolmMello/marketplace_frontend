import styled from "styled-components";

export const AddItem = styled.section`
    padding: 0px 5px;
    #test {
        display: none;
    }
    .input--area {
        margin-bottom: 40px
    }
    label {
        display: block;
        height: 180px;
        width: 180px;
        margin-bottom: 20px
    }
    .img--container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: gray;
        font-weight: bold;
        cursor: pointer;
        height: 180px;
        width: 180px;
        background-color: rgb(235,235,235);
        border: 1px dashed #660C27;
        border-radius: 15px;
    }
    .product--name {
        border: none;
        border-bottom: 1px solid #660C27;
        background: transparent;
        padding: 10px 2px;
        font-size: 20px;
        width: 60%;
        outline: none
    }
    p {
        font-size: 14px;
        margin: 5px 0
    }
    textarea {
        resize: none;
        outline: none;
        border-radius: 5px;
        border: 1px solid #660C27;
        padding: 5px;
        height: 100px;
        font-size: 14px;
        font-family: Poppins;
        width: 60%;
        background-color: rgb(235,235,235);
    }
    .price--area {
        margin-top: 30px;
        .price {
            width: 120px;
            padding: 10px;
            background-color: rgb(235,235,235);
            border: 1px solid #660C27;
            border-radius: 5px;
            outline: none
        }
    }
    .category--area {
        .category {
            width: 120px;
            padding: 10px;
            margin-top: 20px;
            background-color: rgb(235,235,235);
            border: 1px solid #660C27;
            border-radius: 5px;
            outline: none;
            font-size: 17px;
            color: #49081B
        }
    }
`