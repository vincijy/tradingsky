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
`;