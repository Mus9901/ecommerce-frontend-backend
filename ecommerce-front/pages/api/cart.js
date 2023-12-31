import { mongooseConnect } from "../components/lib/mongoose";
import { Product } from "../components/models/Product";

export default async function handle(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Product.find({ _id: ids }));
}
