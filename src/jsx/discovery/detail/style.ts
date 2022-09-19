import styled from 'styled-components';
export const DiscoverDetailPage = styled.div `
  // whole card
  .ant-card-body{
    box-shadow: 0 4px 8px rgb(224 224 224 / 40%);
    border-radius: 14px !important;
  }
  // don't delete this, it's fix the bug of border show
  .ant-card{
    border-radius: 14px !important;
  }

  padding: 40px 120px;
  padding-bottom: 100px;
  background: #f4f6f6;
  @media screen and (min-width: 0px) and (max-width: 700px) { // 移动端适配 iPhone：footer宽度
    padding: 20px 10px;
  }
  // ipad
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 30px;
    padding-bottom: 130px;
  }
  // ipad pro
  @media screen and (min-width: 1024px) and (max-width: 1366px) {
    padding: 20px 60px;
    padding-bottom: 40px;
  }
  // wide screen
  @media screen and (min-width: 1550px) {
    padding-bottom: 160px;
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
  .priceWrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
  .card-all {
    justify-content: space-between;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
  }

  .ant-tabs{
    // tab list
    .ant-tabs-tab{
      margin: 0px 10px;
      margin-bottom: 8px;
      padding: 4px 10px;
      border-radius: 8px;
      @media screen and (min-width: 0px) and (max-width: 700px) {
        margin-left: 5px;
      }
    }

    // single button
    .ant-tabs-tab-btn{
      font-size: 18px;
      @media screen and (min-width: 0px) and (max-width: 700px) {
        font-size: 13px;
      }
    }

    // active button
    .ant-tabs-tab-active{
      background-color: #4040FF;
      margin-bottom: 10px;

      .ant-tabs-tab-btn{
        color: white;
      }
    }

    // the bottom part of card
    .ant-tabs-content-holder{
      /* margin-top: 20px; */
    }

    // the bottom line of tab
    .ant-tabs-ink-bar-animated{
      display: none;
    }
  }

  // Highchart居中
  .ant-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // Highchart border
  .ant-col-lg-14{
  }

  .ant-col-lg-10{
  }
`;
