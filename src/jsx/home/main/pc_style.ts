import styled from 'styled-components';
import { ossImgs } from '@oss';
export const MainWrapper = styled.div `
    height: 100vh;
    margin-bottom: 30rem;
    background: url(${ossImgs.homeMain}) no-repeat center; // 图片填充
    background-size: 100% 100%;

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
                margin-top: 25%;
                h2 {
                    font-size: 45px;
                    color: white;
                    line-height: 38px;
                }
                p {
                    margin-top: 45px;
                    margin-bottom: 20px;
                    font-size: 22px;
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
                width: 78%;
                height: 40rem;
                position: absolute;
                top: 70%;
                left: 50%;
                transform: translate(-50%, 0);
                border-radius: 30px;
                background: black;
                padding: 40px;
                .pad_inner_box {
                    background: white;
                    width: 100%;
                    height: 100%;
                    background: url(${ossImgs.chart_0}) no-repeat center; // 图片填充
                    background-size: 100% 100%;
                    // .main-img-1{
                    //     max-width: 100%;
                    //     height: auto;
                    //     background-size: 100% 100% ;
                    //     margin: 0 auto;
                    //     display: block;
                    //     font-size: 0;
                    // }
                }
            }
         }
    }

`;

