import styled from 'styled-components';

export const ChartWrapper = styled.div `
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1); // 上边框
    
    .site-layout-background {
        text-align: center;
        // TODO: css layout design
        // border: 1px solid red;
    }

    // 包含了右侧的所有
    .right-content-wrapper {
        margin: 0px 13px; // 避免移动端出现左右的滚动条
        padding: 0px 16px;
        overflow: 'initial';
        // TODO: css layout design
        // border: 1px solid green;
    }
`;

export const ChartLeft = styled.div `
    .side{
        overflow: auto;  // 上下滚轮
        height: 1235px;
        background-color: white;
        border-right: 1px solid rgba(0, 0, 0, 0.1); // 菜单栏右边框

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
