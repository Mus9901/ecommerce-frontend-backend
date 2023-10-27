import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Title from "../components/Title";
import { mongooseConnect } from "../components/lib/mongoose";
import { Product } from "../components/models/Product";
import Center from "../components/Center";
import styled from "styled-components";
import WhiteBox from "../components/WhiteBox";
import ProductImages from "../components/ProductImages";
import Button from "../components/Button";
import CartIcon from "../components/icons/CartIcon";
import { CartContext } from "../components/CartContext/CartContext";
import Footer from "../components/Footer/Footer";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
    border: 1px solid #ddd;
    border-top: 0;
    border-bottom: 0;
    height: 650px;
    padding: 50px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

const Desc = styled.p`
  font-weight: 600;
  @media screen and (min-width: 768px) {
    border: 1px solid #ddd;
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
    padding-top: 40px;
    padding-right: 12px;
  }
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>

            <PriceRow>
              <div>
                <Price>£{product.price}</Price>
              </div>

              <div>
                <Button primary="true" onClick={() => addProduct(product._id)}>
                  <CartIcon />
                  Add to Cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}