import {
  getProductsByCategory,
  getProductsByName,
  getProductsByNameAndCategory,
} from "../services/products-services.js";

import categoriesProvider from "./categories-context.js";

async function fecthProductsByCategories() {
  const products = await getProductsByCategory(
    categoriesProvider.currentCategory
  );
  this.products = products;
  this.status = "success";
}

async function fecthProductsBySearch(query, category_id) {
  let products;
  if (!category_id) {
    products = await getProductsByName(query);
  } else {
    products = await getProductsByNameAndCategory(query, category_id);
  }
  this.products = products;
  this.status = "success";
}

const productsProvider = {
  products: [],
  status: "idle",
  queryValue: "",
  fecthProductsByCategories,
  fecthProductsBySearch,
};

export default productsProvider;
