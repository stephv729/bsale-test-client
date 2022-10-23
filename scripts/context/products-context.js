import { getProductsByCategory } from "../services/products-services.js";
import categoriesProvider from "./categories-context.js";

async function fecthProductsByCategories(){
  const products = await getProductsByCategory(categoriesProvider.currentCategory)
  this.products = products
  this.status = "success"
}
const productsProvider = {
  products: [],
  status: "idle",
  fecthProductsByCategories,
};

export default productsProvider;