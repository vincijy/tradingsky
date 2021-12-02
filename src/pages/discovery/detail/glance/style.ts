
import styled from 'styled-components';
export const GlanceWrapper = styled.div `
  /* border: 1px solid green; */
  .ant-card {
    margin: 5px 20px !important;
  }
  .glanceDataWrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-width: 400px;
    /* margin: 0 auto; */
    .ant-card {
      margin: 30px;
      border-radius: 20px;
    }

    .glance-card{
      margin-top: 20px !important;
      border: 1px solid #4040FF;
    }

    h2{
      font-size: 20px;
      font-weight: bold;
    }
    .glance-row{
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      span{
        font-size: 14px;
      }
    }
  }
`;
