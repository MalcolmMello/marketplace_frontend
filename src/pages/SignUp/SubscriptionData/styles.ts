import styled from "styled-components";

export const Subscription = styled.main`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: auto;

        h1 {
            color: #FF175B;
        }

        .content {
            display: flex;

            .card--area {
                width: 50%;
            }
            
            .description {
                width: 50%;
                margin-left: 30px;

                .total {
                    display: flex;
                    justify-content: space-between;
                    h2 {
                        margin: 10px 0px;
                        font-weight: 600
                    }
                }
                button {
                    width: 100%;
                    height: 42px;
                    background-color: #FF175B;
                    border: none;
                    border-radius: 10px;
                    color: #FFF;
                    font-weight: bold;
                    font-size: 17px;
                    margin-top: 10px;
                    cursor: pointer
                }

                h1 {
                    margin: 0px;
                    font-size: 25px;
                    color: #000;
                    font-weight: 600
                }

                .text {
                    font-size: 17px;
                    margin-top: 8px
                }
            }
        }
    }
`;