import styled from 'styled-components';
import { ossImgs } from '@oss';
import 'animate.css';

export const MainWrapper = styled.div `
    h1 {
        color: var(--hero-title-color);
        font-display: swap;
        font-family: Euclid Circular B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
        font-size: 56px;
        font-style: normal;
        font-weight: 600;
        line-height: 64px;
        margin: 0;
        margin-bottom: 16px;
    }
    p {
        color: var(--hero-content-color);
        font-size: var(--hero-content-font-size);
        font-style: normal;
        font-weight: 400;
        letter-spacing: .0027em;
        line-height: var(--hero-content-line-height);
        margin: 0;
        margin-bottom: var(--hero-content-gap-bottom);
    }
    .banner {
        width: 100%;
        align-items: center;
        background: linear-gradient(90deg,#34ceff,#7284ff 19.13%,#ae6cff 33.85%,#df60ff 51.04%,#8b7eff 67.71%,#4474ff 83.33%,#1251ff 99.99%,#2962ff);
        display: flex;
        flex-direction: row;
        font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
        justify-content: center;
        margin: 0;
        padding: 12px var(--container-padding);
    }
    .BannerContent_bHEU {
        padding-top: 16px;
        padding-bottom: 16px;
    }
    .content {
        border: 1px solid red;
        width: 100%;
    }
    .HeroContainer {
        padding: 40px;
        padding-top: 100px;
        align-items: center;
        display: flex;
        justify-content: space-around;
        width: 100%;
        gap: 50px;
        flex-wrap: wrap;
    }
    .HeroMain {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 50%;
        padding-left: 13.3%;
    }
    .HeroChartSection {
        margin: 0;
        width: 50%;
        position: relative;
        backdrop-filter: blur(10.3785px);
        background: #ffffff0d;
        margin-bottom: 30px;
        display: flex;
    }   
    .startBtn {
        align-items: center;
        background-color: '#2962ff';
        border-radius: 12px;
        box-shadow: inset 0 0 0 1px '#2962ff';
        display: flex;
        font-size: 18px;
        font-style: normal;
        font-weight: 590;
        letter-spacing: -.025em;
        line-height: 24px;
        padding: 16px 32px;
    }
    .chartCard {
        box-shadow: -4px -5px 41px -3px rgba(41,98,255,0.99);
        -webkit-box-shadow: -4px -5px 41px -3px rgba(41,98,255,0.99);
        -moz-box-shadow: -4px -5px 41px -3px rgba(41,98,255,0.99);
    }
    .intro {
        height: 200px;
    }
`;

