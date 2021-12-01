import styled from 'styled-components';

export const ProductWrapper = styled.div `
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
  }
  .debug {
    border: 1px solid red;
  }
  .postImg {
    border-radius: 20px;
    object-fit: cover;
  }
  .imgCol {
    text-align: center;
    img {
      border-radius: 15px;
      object-fit: cover;
      height: 150px;
    }
  }
`;