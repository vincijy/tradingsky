import styled from 'styled-components';
import { ossImgs } from '@/oss';
export const MainWrapper = styled.div `
    height: 100vh;
    background: url(${ossImgs.homeMain}) no-repeat center; // 图片填充
    background-size: 100% 58%;
    background-position-y: top;

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        .home-container {
            .home-slogon {
                width: 100%;
                color: white;
                text-align: center;
                color: white;
                margin-top: 80px;
                h2 {
                    font-size: 22px;
                    color: white;
                }
                p{
                    margin-top: 25px;
                    font-size: 14px;
                    text-align: center; // 文字居中
                }
            }
            .btn-area {
                text-align: center;
                .btn {
                    padding: 0 50px;
                    height: 50px;
                    line-height: 48px;
                    display: inline-block;
                    background-color: #ffffff;
                    border-radius: 4px;
                    font-size: 16px;
                    margin: 25px auto 0;
                    text-decoration: none;
                    font-weight: bold;
                    box-sizing: border-box;
                    border: 2px solid #ffffff;
                    transition: opacity 0.3s;
                    color: #3f239c;
                }
            }
 
            .pad {
                border: 2px solid black;
                width: 90vw;
                height: 61vw;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, 0);
                border-radius: 15px;
                background: black;
                padding: 15px;
                .pad_inner_box {
                    background: white;
                    width: 100%;
                    height: 100%;
                    background: url(${ossImgs.chart_0}) no-repeat center; // 图片填充
                    background-size: 100% 100%;
                }
            }
         }
    }

`;

