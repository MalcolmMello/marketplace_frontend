import styled from "styled-components";

export const SignIn = styled.main`
    display: grid;
    width: 100vw;
    min-height: 100vh;
    grid-template-columns: 50% 2fr;

    .left--side {
        display: flex;
        align-items: center;
        justify-content: center;

        .left--container {
            display: flex;
            flex-direction: column;
            height: 80%;
            width: 90%;
            padding: 5px;

            .logo--area {
                display: flex;
                align-items: center;
                img {
                    width: 35%;
                    margin-right: 10px
                }
                div  {
                    font-weight: 600;
                    margin-left: 10px;
                    font-size: 20px
                }
            }

            h1 {
                font-size: 40px
            }
            p {
                font-size: 17px;
                font-weight: 500
            }
        }
    }
    

    .right--side {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--pink);

        .right--container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 80%;
            width: 70%;
            padding: 5px;
            border-radius: 17px;
            background-color: var(--white);
            
            form {
                width: 75%;
                height: 90%;
                justify-content: space-between;
                display: flex;
                flex-direction: column;
                font-weight: 500;

                h3 {
                    margin: auto
                }

                .form--area {
                    margin-top:18px
                }

                .input--area {
                    display: flex;
                    flex-direction column;
    
                    input {
                        height: 40px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        padding: 7px;
                        margin-bottom: 10px;
                        font-size: 17px;
                    }
            
                    input:focus {
                        outline: 1px solid #ccc;
                    }
                }
    
                button {
                    width: 100%;
                    height: 49px;
                    background-color: var(--pink);
                    border: none;
                    border-radius: 10px;
                    color: #FFF;
                    font-weight: bold;
                    font-size: 15px;
                    margin: auto;
                    cursor: pointer;
                }

                .error--message {
                    font-size: 12px;
                    color: red;
                    min-height: 18px;
                }
            }

            
        }
    }
`;  