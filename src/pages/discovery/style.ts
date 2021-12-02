import styled from 'styled-components';
export const DiscoverPage = styled.div `

  // 总体
  padding: 20px 0px;
  padding-left: 60px;
  padding-right: 90px; // fix grid padding bug
  padding-bottom: 150px;
  background: #f4f6f6;
  min-height: 800px;
  @media screen and (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 15px 20px;
    padding-right: 40px; // fix grid padding bug
    padding-bottom: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 30px;
    padding-right: 67px; // fix grid padding bug
    padding-bottom: 100px;
  }

  .card-all {
    display: grid; /* 1 */
    grid-template-columns: repeat(auto-fill, 220px); /* 2 */
    @media screen and (min-width: 0px) and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      margin-right: -28px !important; // fix grid padding bug
      margin-left: 10px;
    }
    grid-gap: 1rem; /* 3 */
    justify-content: space-between; /* 4 */
  }
  
  .abs-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  // 标题
  .card-title{
    font-size: 32px;
    display: flex;
    margin-right: -35px; // fix grid padding bug
    @media screen and (min-width: 0px) and (max-width: 767px) {
      display: none;
    }
  }

  .card-title-introduce{
    font-size: 24px;
    display: flex;
    @media screen and (min-width: 0px) and (max-width: 767px) {
      display: none;
    }
  }

  // 搜索框 和 分类框
  .card-tool-bar{
    display: flex;
    justify-content: space-between;
    margin: 30px 20px;
    margin-right: -18px; // fix grid padding bug
    @media screen and (min-width: 0px) and (max-width: 767px) { // mobile
      display: flex;
      flex-direction: column;
      margin: 20px 0px;
      margin-right: -20px; // fix grid padding bugs
    }

    .tool-bar-left{
      width: 250px;
      @media screen and (min-width: 0px) and (max-width: 767px) { // mobile
        width: 100%;
        padding: 0 10px;
        margin-bottom: 10px;
      }
      @media screen and (min-width: 768px) and (max-width: 1024px) { // ipad
        width: 200px;
      }
    }

    .tool-bar-right{
      @media screen and (min-width: 0px) and (max-width: 767px) { // mobile
        display: flex;
        justify-content: center;
      }
    }
    .card-tool-select{
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      margin: 0px 10px;
      @media screen and (min-width: 768px) and (max-width: 1024px) { // ipad
        margin: 0 5px;
      }
    }
  }

`;
