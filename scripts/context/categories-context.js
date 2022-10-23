import { getCategories } from "./services/categories-services.js";

async function fetchCategories() {
  const categories = await getCategories();
  this.categories = categories;
}

const categoriesProvider = {
  categories: [],
  fetchCategories,
};

export default categoriesProvider;
