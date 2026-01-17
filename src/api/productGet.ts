import { products } from "../assets/Products";

async function productGet() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return products;
}

export default productGet;
