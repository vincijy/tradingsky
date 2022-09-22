import styled from 'styled-components';

export const DescribeWrapper = styled.div `
    .lsc-markdown {
        h2 {
            font-weight: bold;
        }
        a {
            color: red;
            font-weight: bold;
        }
    }

    .ant-card-head{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1); // 下边框
    }

    .content-describe{
        margin-top: 28px;
        text-align: left;
        font-size: large;
        border: 1px solid rgba(0, 0, 0, 0.1); // 外边框

        @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：拉长边距
            margin-top: 65px;
            margin-bottom: 30px;
        }

    }

    .bord-describe{
        /* height: 200px; */
        border-radius: 2px;

        /* @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配 iPhone：放大高度
            height: 300px;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) { // 移动端适配 iPad：放大高度
            height: 280px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1366px) { // 移动端适配 iPad pro：放大高度
            height: 250px;
        } */
    }

    .title{
        margin-top: 14px;
        font-weight: bolder;
    }

    .content{
        margin-top: 7px;
    }

    .weibo-url{
        /* color: #9D9D9D; */
        font-weight: 200;
        text-decoration: underline;
    }

    .weibo-url:hover{
        font-weight: bold;
    }
`;

export const MarkdownWrapper = styled.div `

    h3:nth-child(1){
        margin-top: -10px;
    }

    h3{
        margin: 5px 0;
        margin-top: 25px;
    }

    li{
        margin: 3px 0;
    }

    a{
        color: #212F3D !important;
        text-decoration: underline;
    }

    a:hover{
        font-weight: 200;
    }

    li:hover{
        cursor: default;
    }
`;