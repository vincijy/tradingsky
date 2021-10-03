import styled from 'styled-components';

export const TermWrapper = styled.div `
    height: 100hv; // 整体大小
    .term-container {
        justify-content: center;
        display: flex;
        width: 100%;
    }
    .term-text-area {
      text-align: left;
      width: 100%;
      margin-top: 40px;
      margin-bottom: 100px; // 大字和小字间距      
      padding-left: 40px;
      .head-text {
          font-weight: bold;
          color: black;
          font-size: 38px;
          text-align: center;
          margin-top: 100px; // 向上间距
          margin-bottom: 100px; // 大字和小字间距      
        }
        .big-text {
          font-weight: bold;
          color: black;
          margin-top: 60px; // 向上间距
          margin-bottom: 60px; // 大字和小字间距
          font-size: 22px;
          text-align: left;
          margin-left: 100px;
          margin-right: 100px; 
        }
      .small-text {
        color: black;
        margin-top: 40px; // 向上间距
        margin-bottom: 40px; // 大字和小字间距
        font-size: 18px;
        text-align: left;
        margin-left: 130px;
        margin-right: 130px;
      }
      p {
          font-size: 18px;
          color: #353030;
          line-height: 30px;
      }

  }
`;