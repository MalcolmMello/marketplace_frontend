import styled from "styled-components";

export const AddItem = styled.main`
    padding: 0px 5px;
    .input--area {
        margin-bottom: 40px
    }
    input {
        border: none;
        border-bottom: 1px solid #FF175B;
        outline: none;
        background: transparent;
        padding: 10px 2px;
        font-size: 20px;
        width: 60%
    }
    p {
        font-size: 14px
    }
    textarea {
        resize: none;
        outline: none;
        border-radius: 5px;
        border: 1px solid #949494;
        padding: 5px;
        height: 100px;
        font-size: 14px;
        font-family: Poppins;
        width: 60%;
        background-color: rgb(235,235,235)
    }
`