import styled from 'styled-components';
export const DiscoverPage = styled.div `

  padding: 20px 60px;
  padding-bottom: 150px;
  background: #f4f6f6;
  min-height: 800px;

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

  .card-all {
    display: grid; /* 1 */
    grid-template-columns: repeat(auto-fill, 220px); /* 2 */
    grid-gap: 1rem; /* 3 */
    justify-content: space-between; /* 4 */
  }
  .abs-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
