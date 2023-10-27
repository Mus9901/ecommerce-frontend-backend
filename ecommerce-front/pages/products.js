import React from "react";
import Header from "./components/Header/Header";
import Center from "./components/Center";
import { mongooseConnect } from "./components/lib/mongoose";
import { Product } from "./components/models/Product";
import ProductsGrid from "./components/ProductsGrid";
import Title from "./components/Title";
import Footer from "./components/Footer/Footer";

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ProductsGrid products={products} />
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
