import styled from 'styled-components';
import catalog from '@/assets/img/home_catalog.jpeg';


export const CatalogWrapper = styled.div `
    height: 800px; // 整体大小
    background: url(${catalog}) no-repeat center; // 图片填充
    background-size: 95% 95%;
    margin-top: -100px; // 向上合并一点

    .content{
        margin-right: 60%; // 左侧水平居中
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;

        .container{
            margin-top: 30%; // 文字垂直居中

            h2{
                margin-top: 14px; // 文字的行间距
                margin-left: 34px; // 文字左边间距

                font-size: 30px; // 文字大小、对齐方式
                text-align: left;
            }  
        }
    }

    Button{
        margin-top: 48px; // 按钮向上间距

        font-weight: 500;
        border: 1px solid #dcdcdc;
        border-radius: 10px;

        font-size: 17px;

        height: 45px;
        width: 135px;
    }
`;

export const CatalogBottom = styled.div ` // 数字字体
    display: flex;
    justify-content: space-around; // 分布居中

    div{
        margin-top: 42px; // 字体向上间距

        p{
            color: #2894FF; // 字体蓝色
            font-size: 28px;
        }
    }


`;
