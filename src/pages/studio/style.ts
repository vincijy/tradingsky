import styled from 'styled-components';

export const ChartWrapper = styled.div `
    display: flex;
    margin-top: -10px;
    border-top: #f0f0f0 0.1px solid;
`;

export const ChartLeft = styled.div `
    .side{
        overflow: auto;  // 上下滚轮
        height: 1235px;
        background-color: white;

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：放大高度
            height: 1289px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：放大高度
            height: 1310px;
        }
    }
`;

export const ChartRight = styled.div `
    margin-left: 28px;
`;

export const AppFooter = styled.div `
    .content{
        @media screen and (min-width: 1550px) {
            max-width: 1900px; // 宽屏适配，修复图表页面的footer
        }

        .footer-iphone{
            @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：隐藏icon
                display: none;
            }
        }
    }
`;
