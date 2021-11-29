import styled from 'styled-components';
export const DiscoverDetailPage = styled.div `

  padding: 40px 120px;
  padding-bottom: 100px;
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

  .debug {
    border: 1px solid red;
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

  // whole card
  .ant-card-body{
    box-shadow: 0 4px 8px rgb(224 224 224 / 40%);
    border-radius: 14px !important;
  }

  // don't delete this, it's fix the bug of border show
  .ant-card{
    border-radius: 14px !important;
  }

  .ant-tabs{
    // tab list
    .ant-tabs-tab{
      margin: 0px 10px;
      margin-bottom: 8px;
      padding: 4px 10px;
      border-radius: 8px;
    }

    // single button
    .ant-tabs-tab-btn{
      font-size: 18px;
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
      margin-top: 20px;
    }

    // the bottom line of tab
    .ant-tabs-ink-bar-animated{
      display: none;
    }
  }

`;
