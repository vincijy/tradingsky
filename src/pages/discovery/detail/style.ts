import styled from 'styled-components';
export const DiscoverDetailPage = styled.div `

  padding: 20px 60px;
  padding-bottom: 150px;
  background: #f4f6f6;
  @media screen and (min-width: 0px) and (max-width: 700px) { // 移动端适配 iPhone：footer宽度
    padding: 20px 10px;
  }
  .card-tool-bar{
    display: flex;
    justify-content: space-between;
    margin: 30px 20px;

    .card-tool-select{
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      margin: 0px 10px;
    }

  }
  .share_and_collect {
    border: 1px solid red;
    display: flex;
    justify-content: flex-end;
  }
  .debug {
    border: 1px solid red;
  }
  .priceWrapper {
    display: flex;
    justify-content: center;
    border: 1px solid red;
    flex-direction: row;
    align-items: center;
  }
  .links {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
  }
  .card-foot-button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 42px;
  }

  .card-all {
    justify-content: space-between;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
  }
  .glanceDataWrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: 1px solid green;
    .ant-card {
      margin: 30px;
      border: 1px solid blue;
      border-radius: 20px;
    }
  }
`;