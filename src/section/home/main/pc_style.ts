import styled from 'styled-components';
import { ossImgs } from '@oss';

export const MainWrapper = styled.div `
    background-color: #252233;
    height: 100vh;
    background: url(${ossImgs.banner}) no-repeat center; // 图片填充
    background-size: 100% 100%;

    /* From uiverse.io */
    button {
        --glow-color: rgb(217, 176, 255);
        --glow-spread-color: rgba(191, 123, 255, 0.781);
        --enhanced-glow-color: rgb(231, 206, 255);
        --btn-color: rgb(100, 61, 136);
        border: .25em solid var(--glow-color);
        padding: 1em 3em;
        color: var(--glow-color);
        font-size: 15px;
        font-weight: bold;
        background-color: var(--btn-color);
        border-radius: 1em;
        outline: none;
        box-shadow: 0 0 1em .25em var(--glow-color),
                0 0 4em 1em var(--glow-spread-color),
                inset 0 0 .75em .25em var(--glow-color);
        text-shadow: 0 0 .5em var(--glow-color);
        position: relative;
        transition: all 0.3s;
    }

    button::after {
        pointer-events: none;
        content: "";
        position: absolute;
        top: 120%;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: var(--glow-spread-color);
        filter: blur(2em);
        opacity: .7;
        transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
    }

    button:hover {
        color: var(--btn-color);
        background-color: var(--glow-color);
        box-shadow: 0 0 1em .25em var(--glow-color),
                0 0 4em 2em var(--glow-spread-color),
                inset 0 0 .75em .25em var(--glow-color);
    }

    button:active {
        box-shadow: 0 0 0.6em .25em var(--glow-color),
                0 0 2.5em 2em var(--glow-spread-color),
                inset 0 0 .5em .25em var(--glow-color);
    }
    
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

