import styled from 'styled-components';
export const PriceWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 45px;
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
            background: #492e9e;
            .ant-card-head-title {
                color: white;
            }
        }

        .price-money {
            color:  #492e9e;
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
            color: #aaaaaa;
        }
        .price-desc {
            color: #492e9e;
            text-align: center;
            height: 200px;
            width: 200px;
        }
        button {
            background: #492e9e;
            margin-bottom: 40px;
        }
    }
`;

export const PricePageWrapper = styled.div `
`;