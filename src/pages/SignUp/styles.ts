import styled from "styled-components";

export const SignUp = styled.div<{percent: number}>`
    height: 100vh;
    width: 100%;
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;

        img {
            width: 12%;
        }
    }
    .border {
        height: 2px;
        transtion: all ease 0.2s;
        width: ${props => props.percent}%;
        color: var(--pink);
        background-color: var(--pink);
    }
`