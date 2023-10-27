const { default: styled } = require("styled-components");

const Title = styled.h1`
  font-size: 1.5em;
  @media screen and (min-width: 768px) {
    font-size: 3em;
  }
`;

export default Title;
