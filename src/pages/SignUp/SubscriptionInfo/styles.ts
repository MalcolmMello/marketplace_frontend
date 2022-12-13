import styled from 'styled-components';

export const SubscriptionInfo = styled.main`
    height: 80%;
    .container {
        height: 100%;
        max-width: 900px;
        margin: auto;

        .text {
            font-weight: 500
        }

        .top--area {
            display: flex;
            flex-direction: column;
            height: 50%;

            h1 {
                margin-top: 50px;
                color: #FF175B
            }
        }

        .bottom--area {
            display: flex;
            height: 50%;
            
            h2, h3 {
                color: #FF175B;
            }

            .bottom--area--first {
                flex:1;

                .price--area {
                    
                    h1 {
                        margin: 0px;
                        margin-right: 7px
                    }

                    button {
                        width: 50%;
                        height: 42px;
                        background-color: #FF175B;
                        border: none;
                        border-radius: 10px;
                        color: #FFF;
                        font-weight: bold;
                        font-size: 17px;
                        cursor: pointer;
                        margin-top: 33px
                    }

                    .price {
                        display: flex;
                        align-items: center;
                        h1 {
                            font-size: 30px
                        }
                    }
                }
            }

            .bottom--area--second {
                flex: 1
            }
        }
    }
`