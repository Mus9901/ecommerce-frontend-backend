import Breaker from "./components/Breaker/Breaker";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewProducts from "./components/NewProducts/NewProducts";
import { mongooseConnect } from "./components/lib/mongoose";
import { Product } from "./components/models/Product";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <Breaker />
      <NewProducts products={newProducts} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "6528c1cd41db1d30fa8dc752";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
