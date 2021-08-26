import styled from 'styled-components';

export const InsightWrapper = styled.div `
`;

export const InsightTop = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px; // 向上间距
    @media screen and (min-width: 1550px) {
        margin-top: 40px; // 宽屏适配
    }

    margin-bottom: 32px; // 按钮和下半部分间距

    h2{
        font-size: 32px;
        margin-bottom: 4px; // 大字和小字间距
    }

    p{
        margin-top: 14px; // 小字直接间距
        font-size: 20px;
    }

    Button{
        margin-top: 32px; // 按钮和上面字间距

        font-weight: 500;
        border: 1px solid #dcdcdc;
        border-radius: 10px;

        font-size: 17px;

        height: 40px;
        width: 95px;
    }
`;

export const InsightBottom = styled.div `
    display: flex;
    justify-content: space-around; // 分布居中

    // .insight-img{
    //     margin-left: -150px; // 图片居中
    // }
`;