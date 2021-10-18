import styled from 'styled-components';
export const ContactWrapper = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 45px;
    
    margin: 115px;

    @media screen and (min-width: 1550px) {
        height: 775px; // 宽屏适配
    }

    .card-bottom{
        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配
            display: none;
        }
    }

    .card-top{
        display: flex;

        @media screen and (min-width: 320px) and (max-width: 480px) { // 移动端适配
            display: block;
        }
    }
`;

export const ContactPageWrapper = styled.div `
`;