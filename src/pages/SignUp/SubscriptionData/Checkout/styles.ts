import styled from "styled-components";

export const CheckoutForm = styled.form`
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
.text {
        font-size: 17px;
        margin-top: 8px
    }
`