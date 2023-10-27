import React from "react";
import styled from "styled-components";
import Center from "../Center";

const InBreaker = styled.div`
  background-color: #ddd;
  width: 100%;
  height: 2px;
`;

export default function Breaker() {
  return (
    <Center>
      <InBreaker></InBreaker>
    </Center>
  );
}
