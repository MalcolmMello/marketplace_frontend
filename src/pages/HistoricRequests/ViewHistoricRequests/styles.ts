import styled from "styled-components";

export const Container = styled.section`
    padding: 10px;

    .filter--area {
        display: flex;
    }

    .input--area {
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        input, select {
            border: 1px solid var(--gray);
            height: 40px;
            border-radius: 10px;
            resize: none;
            outline: none;
            padding: 10px;
            font-size: 15px;
        }

        select {
            width: 100px;
        }
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0px;
        margin: 0;

        li {
            flex: 1;
        }
    }

    .no--requests {
        padding: 15px 5px;
        margin-top: 20px
    }

    .filtered--top {
        background-color: #FFF;
        font-weight: bold;
        padding: 15px 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        margin-top: 20px
    }

    .filtered--item {
        background-color: #FFF;
        padding: 0px 5px;
        box-shadow: inset 0px 18px 10px -17px rgb(227,227,227);

        ul {
            padding: 0px 4px;
            li {
                display: flex;
                align-items: center;
                height: 50px;
                margin-top: 5px;
                border-bottom:1px solid rgb(227,227,227);
                
            }
        }
    }
`;