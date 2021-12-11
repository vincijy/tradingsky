import styled from 'styled-components';

export const DetailIntroCard = styled.div `

  // don't delete this, it's fix the bug of border show
  .ant-card-body{
    border-radius: 14px !important;
  }

  .intro-button-back{
    display: flex;
    margin-bottom: 17px;
    .intro-button-back-left{
      margin-right: 2px;
    }
    .intro-button-back-right{
      font-size: 17px;
    }
  }
  .intro-button-back:hover{
    font-weight: bold;
  }
  
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
      // Display change: grid to flex
      display: flex; /* 1 */
      grid-template-columns: repeat(auto-fill, 45px); /* 2 */
      grid-gap: 1rem; /* 3 */
      justify-content: flex-start; /* 4 */
      flex-wrap: nowrap;
    }
    .intro-foot-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 42px;
      margin-right: 20px;
      /* border: 1px solid darkblue; */

      a{
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        div {
          white-space: nowrap;
        }
      }
    }


  .debug {
    /* border: 1px solid red; */
  }
`;