import styled from "styled-components";

export const OpenRequest = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 5px solid var(--wine);
    border-bottom: 1px solid rgb(220,220,220);
    .top--area {
        display: flex;
        justify-content: space-between;
    }
    a {
        text-decoration: none;
        color: var(--wine);
        height: 100%;
        width: 100%;
        padding: 10px;
    }
`