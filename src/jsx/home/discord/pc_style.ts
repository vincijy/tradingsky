import styled from 'styled-components';
import { ossImgs } from '@/oss';

export const DeclareWrapper = styled.div `
    .declare-container {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 400px;
        padding: 30px;
        margin-top: 30px;
        text-align: center;
        background: #F5F5F6;
        // color: #404EED;
        // border: 0.1px solid #404EED;
        background: url(${ossImgs.main_2}) no-repeat center; // 图片填充
        font-size: 18px;
        h2{
            font-size: 33px;
            font-weight: bold;
            color: #404EED;
        }
        p{
            font-size: 23px;
            margin-top: 30px;
            color: #404EED;
            line-height: 30px;
        }
        .explore-button{
            padding: 0 80px;
            height: 50px;
            line-height: 48px;
            background-color: #404EED;
            border-radius: 4px;
            font-size: 16px;
            margin: 50px auto 0;
            font-weight: bold;
            box-sizing: border-box;
            // border: 2px solid #404EED;
            color: #fff;

        }
    }
`;
