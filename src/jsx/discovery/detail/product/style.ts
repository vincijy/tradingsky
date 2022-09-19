import styled from 'styled-components';

export const ProductWrapper = styled.div `
  .product-all{
    .ant-image-img{
      height: 100%;
    }
    .description {
      // ipad
      @media screen and (min-width: 768px) and (max-width: 1024px) {
        h3{
          text-align: center;
          font-size: 20px;
        }
        div{
          text-align: center;
          font-size: 16px;
        }
      }
    }
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
    }
  }
`;