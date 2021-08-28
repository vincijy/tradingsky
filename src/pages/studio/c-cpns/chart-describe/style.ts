import styled from 'styled-components';

export const DescribeWrapper = styled.div `
    .content-describe{
        margin-top: 28px;
        text-align: left;
        font-size: large;

        @media screen and (min-width: 900px) and (max-width: 1100px) { // 移动端适配 iPad pro：拉长边距
            margin-top: 65px;
            margin-bottom: 30px;
        }

    }

    .bord-describe{
        height: 200px;
        border-radius: 2px;

        @media screen and (max-width: 450px) { // 移动端适配 iPhone：放大高度
            height: 300px;
        }

        @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：放大高度
            height: 280px;
        }

        @media screen and (min-width: 900px) and (max-width: 1100px) { // 移动端适配 iPad pro：放大高度
            height: 250px;
        }
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
