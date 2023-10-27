import React from "react";
import styled from "styled-components";

const FooterNav = styled.div`
  text-align: center;
  margin-top: 100px;
  background-color: #f6f6f6;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
  height: auto;
  padding: 20px;
`;

export default function Footer() {
  return (
    <FooterNav>
      <div>All rights reserved &copy;</div>
    </FooterNav>
  );
}
