import React, { useContext } from "react";
import styled from "styled-components";
import Center from "../Center";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import CartIcon from "../icons/CartIcon";
import { CartContext } from "../CartContext/CartContext";

const Bg = styled.div`
  background-color: #344347;
  color: #fff;
  padding: 50px 0;
  @media screen and (min-width: 768px) {
    background-color: #edf5f7;
  }
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
    text-align: left;
  }
`;
const Desc = styled.p`
  color: white;
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 1rem;
    margin-top: 20px;
  }
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  img {
    max-width: 80%;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    gap: 40px;
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
    background-color: #344347;
    padding: 50px;
    border-radius: 15px;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: start;
    margin-top: 35px;
    gap: 20px;
  }
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read More
                </ButtonLink>
                <Button onClick={addFeaturedToCart} white="true">
                  Add to Cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>

          <Column>
            <img
              src="https://next-ecommerce-uk.s3.amazonaws.com/1697625635782.png"
              alt="screen"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
