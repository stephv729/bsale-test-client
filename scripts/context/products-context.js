import { getProductsByCategory, getProductsByName } from "../services/products-services.js";
import categoriesProvider from "./categories-context.js";

async function fecthProductsByCategories() {
  const products = await getProductsByCategory(
    categoriesProvider.currentCategory
  );
  this.products = products;
  this.status = "success";
}

async function fecthProductsByName(query) {
  const products = await getProductsByName(query);
  this.products = products;
  this.status = "success";
}

const productsProvider = {
  products: [],
  status: "idle",
  fecthProductsByCategories,
  fecthProductsByName,
};

export default productsProvider;
