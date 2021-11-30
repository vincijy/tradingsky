import styled from 'styled-components';

export const ProductWrapper = styled.div `
  .description {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .debug {
    border: 1px solid red;
    height: 100%;
  }
  .postImg {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    border-radius: 20px;
  }
`;