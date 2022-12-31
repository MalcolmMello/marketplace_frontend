import styled from "styled-components";

export const SubscriptionContainer = styled.section`
    padding: 10px;
    .container {
        width: 500px;
        h1 {
            margin: auto;
            width: max-content;
            margin-top: 10px;
            margin-bottom: 10px 
        }
        .card--area {
            display: flex;
            justify-content: space-between;
            margin: 20px 0px;

            button {
                width: 168px;
                height: 39px;
                background-color: var(--wine);
                border: none;
                border-radius: 10px;
                color: #FFF;
                font-weight: bold;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }
    
`