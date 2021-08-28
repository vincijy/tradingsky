import styled from 'styled-components';

export const SettingWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 140px;

    .ant-tabs.ant-tabs-top{
        min-width: 500px;
    }

    @media all and (min-width: 1650px){ // 宽屏适配
        margin-bottom: 380px;
    }
    
    @media screen and (min-width: 450px) and (max-width: 800px) { // 移动端适配 iPad：背景图片缩小
        margin-bottom: 280px;
    }

    @media screen and (min-width: 900px) and (max-width: 1100px) { // 移动端适配 iPad pro：背景图片缩小
        margin-bottom: 620px;
    }
`;