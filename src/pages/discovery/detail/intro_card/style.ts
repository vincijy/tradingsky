import styled from 'styled-components';

export const DetailIntroCard = styled.div `
  
  .ant-card{
    border-radius: 14px !important;  // whole card
    box-shadow: 0 4px 8px rgb(224 224 224 / 40%);
    margin-bottom: 50px;

    // top
    .intro-top{
      display: flex;

      .intro-top-name{
        display: flex;
        flex-direction: column;
        margin-left: 15px;
      }
    }

    // middle
    .priceWrapper {
      display: flex;
      justify-content: center;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      /* border: 1px solid red; */
    }

    .intro-icon-percent{
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      padding: 5px 10px;
      color: white;
      }
    }

    .share_and_collect {
      display: flex;
      justify-content: flex-end;
    }

    // bottom
    .links {
      display: flex;
      justify-content: space-between;
      /* border: 1px solid red; */
    }
    .intro-foot-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 42px;
      /* border: 1px solid darkblue; */

      a{
        display: flex;
        flex-direction: column;
      }
    }


  .debug {
    /* border: 1px solid red; */
  }
`;