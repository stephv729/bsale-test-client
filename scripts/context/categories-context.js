import { getCategories } from "../services/categories-services.js";

async function fetchCategories() {
  const categories = await getCategories();
  this.categories = categories;
  this.currentCategory = categories[0].id;
}

const categoriesProvider = {
  categories: [],
  currentCategory: null,
  fetchCategories,
};

export default categoriesProvider;
