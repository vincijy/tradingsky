import styled from 'styled-components';

export const FooterWrapper = styled.div `
    background: #252233;
    .content {
        display: flex;    
        justify-content: space-between;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：footer宽度
            max-width: 327px;
        }

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：纵向排列
            flex-direction: column;
            justify-content: flex-start;
        }

        /* 边框间距 */
        margin: 0 30px;
        /* 上下宽度 */
        padding: 35px 0;
        color: #fff;

        @media screen and (min-width: 1550px) {
            max-width: 1900px; // 宽屏适配，修复除图表页面的footer
        }
    }

    a:hover,li:hover{
        font-weight: bolder;
    }
`;

export const FooterLeft = styled.div `
    display: flex;
    align-items: center;

    div{
        font-size: 14px;
        font-weight: 10;
        color: #808080;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：纵向排列
            font-size: 14px;
        }
    }
`;

export const FooterRight = styled.div `
    ul{
        display: flex;
        align-items: center;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：纵向排列、上下间距
            flex-direction: column;
            align-items: flex-start;

            margin-top: 20px;
        }

        li{
            margin: 0 8px;
            font-size: 14px;

            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：缩小字体、上下间距 li
                margin-top: 5px;
                font-size: 14px;
            }
        }

        .footer-iphone{
            @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：字体和间距
                margin-top: 20px;
                display: flex;

                margin-left: -11px; // 垂直居中（discord）
            }
        }

        li:nth-child(3){
            padding-right: 15px;
        }
    }
`;
