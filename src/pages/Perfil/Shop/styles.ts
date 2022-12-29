import styled from "styled-components";

export const ShopArea = styled.form`
    border-radius: 15px;
    box-shadow: 0px 0px 30px rgb(227,227,227);
    color: var(--wine);
    background-color: #FFF;
    padding: 10px;;

    #logo, #cover {
        display: none
    }
    .pics--area {
        display: flex;
        flex-direction: column;
        max-width: 50%
    }
    .cover, .cover--img {
        border: 1px solid var(--gray);
        height: 120px;
        border-radius: 5px;
    }
    img {
        width: 100%;
        object-fit: cover
    }
    .label--logo {
        display: flex;
        align-items: center;
        height: 100px;
        width: 100px;
        margin: auto;
        margin-top: -50px;
        border-radius: 50%;
    }
    .front, .logo--img {
        border: 1px solid var(--gray);
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin: auto;
    }
    .front {
        background-image: url("https://img.icons8.com/metro/26/4D4D4D/camera.png");
        background-position: center;
        background-repeat: no-repeat;
        background-color: rgb(230,230,230);
    }
    .company--data {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        p {
            font-size: 14px;
            margin: 5px 0
        }
        h1 {
            font-size: 30px;
            margin: 0
        }
        .data--input {
            margin-top: 20px;
        }
        input, textarea {
            border: 1px solid var(--gray);
            width: 500px;
            border-radius: 10px;
            resize: none;
            outline: none;
            padding: 10px;
            font-size: 15px;
        }
        input {
            height: 40px;
            background-color: rgb(244,244,244);
        }
    }

    button {
        width: 198px;
        height: 49px;
        background-color: var(--wine);
        border: none;
        border-radius: 10px;
        color: #FFF;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        margin-top: 20px;
    }
    
`