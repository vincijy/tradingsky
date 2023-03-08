import styled from 'styled-components';
import { ossImgs } from '@oss';
import 'animate.css';
import { DeviceWidth } from '@def/index';

export const MainWrapper = styled.div `
    flex: 1;

    h1 {
        color: var(--hero-title-color);
        font-display: swap;
        font-family: Euclid Circular B,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: 64px;
        margin: 0;
        margin-bottom: 16px;
        white-space: nowrap;
    
        @media (min-width: 1300px) {
            font-size: 50px;
        }

        @media (min-width: 1024px) and (max-width: 1300px) {
            font-size: 40px;
        }

        @media (min-width: 500px) and (max-width: 1023px) {
            font-size: 35px;
        }

        @media (max-width: 500px) {
            font-size: 30px;
        }
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

    .HeroContainer {
        padding: 40px;
        align-items: center;
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap;
        /* Font size for desktop devices */
        @media (min-width: 1024px) {
            padding-top: 100px;
        }

        /* Font size for tablet devices */
        @media (min-width: 768px) and (max-width: 1023px) {
            padding-top: 80px;
        }

        /* Font size for mobile devices */
        @media (max-width: 767px) {
            padding-top: 25px;
        }
    }
    .HeroMain {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 50%;
        margin: auto;
        min-width: 360px;
        padding-bottom: 30px;
        align-items: center;
        /* Font size for desktop devices */
        @media (min-width: 1024px) {
            align-items: flex-start;
            padding-left: 10%;
        }

        /* Font size for tablet devices */
        @media (min-width: 768px) and (max-width: 1023px) {
            align-items: flex-start;
        }

        /* Font size for mobile devices */
        @media (max-width: 767px) {
            align-items: center;
        }
    }
    .HeroChartSection {
        margin: 0;
        width: 50%;
        position: relative;
        margin-bottom: 30px;
        display: flex;
        min-width: 360px;
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
        position: relative;
        overflow: hidden;
        margin: auto;
        /* Font size for desktop devices */
        @media (min-width: 1024px) {
            border-radius: 50px;
            height: 530px;
            width: 100%; 
        }

        /* Font size for tablet devices */
        @media (min-width: 768px) and (max-width: 1023px) {
            border-radius: 30px;
            height: 500px;
            width: 100%; 
        }

        /* Font size for mobile devices */
        @media (max-width: 767px) {
            border-radius: 20px;
            height: 400px;
            width: 96%; 
        }
    }
`;

