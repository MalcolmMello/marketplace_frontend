import styled from "styled-components";

export const AddCategory = styled.form`
    display: flex;
    justify-content: space-between;    
    padding: 0px 5px;
    input {
        border: none;
        border-bottom: 1px solid var(--wine);
        outline: none;
        background: transparent;
        padding: 10px 2px;
        font-size: 20px;
        width: 60%
    }
    button {
        width: 100px;
        height: 47px;
        background-color: var(--wine);
        border: none;
        border-radius: 12px;
        color: #FFF;
        padding: 10px;
        font-weight: bold;
        cursor: pointer
    }
`