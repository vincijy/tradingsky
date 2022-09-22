import styled from 'styled-components';

export const DiscoverItem = styled.div `
  .ant-card {
    display:flex;
    flex-direction: column;
    /* justify-content:flex-start; */
    width:234px;
    height:310px;
    border-radius:22px;
    border: 1px solid rgb(222, 224, 224);
    margin:10px 10px;
    /* border: 1px solid red; */
    @media screen and (min-width: 0px) and (max-width: 767px) {
      border-radius: 12px;
      width: 95%;
      height:320px;
      margin: 0;
    }
    @media screen and (min-width: 1550px) {
      margin:10px 20px; // Widescreen adaptation
    }

    .card-info-area{
      display:flex;
      height: 60px;
      cursor: pointer;

      .card-logo{
        width:40px;
        height:40px;
      }

      .card-info{
        margin-left:15px;
          
        .card-name{
          font-size:14px;  // token name
          font-weight: bold;
          margin-top: -8px;
          word-break: break-word;
          @media screen and (min-width: 0px) and (max-width: 767px) {
            font-size: 15px;
          }
        }

        .ant-tag{
          margin-top: 6px;  // token tag
          font-size: 12px;
          border-radius: 6px;
          border-color: white;
        }
      }
    }

    .card-introduce {
      margin: 10px 0px;  // token introduce
      height: 35px;
      font-size: 13px;
      @media screen and (min-width: 0px) and (max-width: 767px) {
        font-size: 15px;
      }
      color:#808080;
      cursor: pointer;
    }

    .card-separate{
      width: 100%;
      border-bottom: 1px solid #e7e7e7;
    }

    .card-data-area {
      margin-top:10px;
      width: 100%;
      cursor: pointer;
        
      .card-data-item{
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
        font-weight:400;
        line-height:21px;
        margin-bottom: 10px;

        .card-data-info{
          display:flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          
          .data-name{
            margin-left:10px;
            font-size:15px;
          }
        }
      }

    }

    .card-foot{
      margin-top: 20px;  // footer
      @media screen and (min-width: 0px) and (max-width: 767px) {
        margin-top: 30px;
      }
      display:flex;
      justify-content: space-between;
      margin-bottom: 20px !important;

      .card-foot-button{
        display:flex;
        flex-direction:column;
        font-size: 13px;
        cursor: pointer;
      }
    }

  }
`;