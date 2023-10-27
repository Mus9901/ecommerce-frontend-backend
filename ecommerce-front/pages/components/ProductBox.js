import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { CartContext } from "./CartContext/CartContext";

const ProductWrapper = styled.div`
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
  @media screen and (min-width: 768px) {
    overflow: hidden;
    padding: 0;
    height: 220px;
    img {
      max-width: 100%;
      max-height: 180px;
      transition: transform 500ms ease;
    }
    img:hover {
      transform: scale(1.05);
    }
  }
`;

const Title = styled(Link)`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 5px;
  color: #333;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-top: 10px;
  }
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 15px;
  }
`;

const PriceRow = styled.div`
  justify-content: space-between;
  margin-top: 5px;
  button {
    width: 60%;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: 10px;
    margin-top: 10px;
    button {
      width: auto;
    }
    button:hover {
      transform: scale(1.05);
      transition: transform 150ms ease;
    }
  }
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5fa36a;
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="imagebox" />
        </div>
      </WhiteBox>

      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>£{price}</Price>
          <Button onClick={() => addProduct(_id)} primary="true" outline="true">
            Add to Cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
