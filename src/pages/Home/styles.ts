import styled from "styled-components";

export const Home = styled.main`
    width: 85vw;
    padding: 10px 60px 0px 40px;
    background-color: rgb(244,244,244)
`;

export const Header = styled.header`
    span {
        color: var(--gray);
        font-size: 12px;
    }
`;

export const AnalyticsOverview = styled.section`
    margin-top: 40px;
    .data--area {
        display: flex;
        justify-content: space-between;
        .data--item {
            cursor: pointer;
            padding: 25px 10px;
            border-radius: 15px;
            min-width: 200px;
            background-color: #fff;
            box-shadow: 0px 0px 30px rgb(235,235,235);
            span {
                display: flex;
                align-items: center;
                margin-top: 15px;
                h2 {
                    margin: 0px 10px 0px 0px
                };
                small {
                    margin-top: 9px
                }
            }
        }
    }
`

export const SevenDaysPerformance = styled.section`
    margin-top: 40px;
    padding: 5px 15px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 30px rgb(235,235,235);
    .perf--container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    };
    .perf--item {
        .title {
            display: flex;
            align-items: center;
            h2 {
                margin: 0 10px 7px 0
            };
            small {
                font-size: 11px;
            };
            margin-bottom: 10px;
        }
        span h2 {
            margin: 0
        }
        margin-bottom: 50px;
    }    
`;