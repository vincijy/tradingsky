import styled from 'styled-components';
export const PriceWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 45px;
    margin-bottom: 30px;
    @media screen and (min-width: 1550px) {
        height: 775px; // 宽屏适配
    }
    .site-card-wrapper {
        padding: 30px;
        background: white;
        width: 80%;
        text-align: center;
        .price-row {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        .ant-card {
            margin-bottom: 40px;

        }
        .ant-card-head {
            background: white;
            .ant-card-head-title {
                color: black;
            }
        }

        .price-money {
            color:  #000000;
            font-size: 64px;
            line-height: 72px;
            font-weight: 600;
            .price-unit {
                font-size: 20px; 
            }
        }
        .price-average {
            font-size: 16px; 
            margin-bottom: 20px;
            color: #000000;
        }
        .price-desc {
            color: #000000;
            text-align: center;
            height: 200px;
            width: 200px;
        }
        button {
            background: #000000;
            margin-bottom: 40px;
        }
    }
`;

export const PricePageWrapper = styled.div `
`;