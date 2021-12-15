import styled from 'styled-components';

export const CatalogWrapper = styled.div `
    padding: 16px 32px;
    @media screen and (min-width: 0px) and (max-width: 767px) {
        padding: 16px 0px;
    }

    h2{
        font-size: 26px;
    }

    .table-title{
        margin-top: 32px;
    }

    a:hover,li:hover{
        font-weight: bolder;
    }

    a{
        text-decoration: none;  // 取消下划线
    }
`;
