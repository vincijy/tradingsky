import styled from 'styled-components';

export const FooterWrapper = styled.div `
    background: #000;

    .content {
        display: flex;    
        justify-content: space-between;
        /* 边框间距 */
        margin: 0 30px;
        /* 上下宽度 */
        padding: 35px 0;
        color: #fff;

        @media screen and (min-width: 1550px) {
            max-width: 1200px; // 宽屏适配，修复footer
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
    }
`;

export const FooterRight = styled.div `
    ul{
        display: flex;
        align-items: center;

        @media screen and (min-width: 1550px) {
            margin-right: -230px; // 宽屏适配
        }

        li{
            margin: 0 8px;
            font-size: 14px;
        }

        li:nth-child(3){
            padding-right: 15px;
        }
    }
`;
