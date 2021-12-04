import styled from 'styled-components';

export const ContractWrapper = styled.div `
.ant-list-items{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  // width:90%;
  .ant-list-item {
    display: flex;
    justify-content: space-between;
    .metamask{
      margin-right: 50px;
    }
  }
}
`;