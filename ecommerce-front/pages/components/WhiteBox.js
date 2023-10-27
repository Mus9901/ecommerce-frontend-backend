const { default: styled } = require("styled-components");

const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  border: 2px solid #ddd;
  @media screen and (min-width: 768px) {
    img {
      transition: transform 500ms ease;
    }
    img:hover {
      transform: scale(1.05);
    }
    height: 17rem;
  }
`;

export default WhiteBox;
