import { getProductsByCategory } from "../services/products-services.js";
import categoriesProvider from "./categories-context.js";

async function fecthProductsByCategories(){
  const products = await getProductsByCategory(categoriesProvider.currentCategory)
  this.products = products
}
const productsProvider = {
  products: [],
  fecthProductsByCategories,
};

export default productsProvider;