import Link from "next/link";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Center from "../Center";
import { CartContext } from "../CartContext/CartContext";
import BarsIcon from "../icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
  @media screen and (min-width: 768px) {
    background-color: #f6f6f6;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25));
  }
`;
const Logo = styled(Link)`
  color: #5c8692;
  text-decoration: none;
  position: relative;
  z-index: 3;
  font-weight: 600;
  font-size: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;
const StyledNav = styled.nav`
  ${(props) => (props.mobileNavActive ? `display: block;` : `display: none;`)}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  rigth: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  height: 200px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    height: auto;
    background-color: #f6f6f6;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #555;
  text-decoration: none;
  padding: 10px; 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

//Responsive

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: #f6f6f6;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>

          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
