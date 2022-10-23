import apiFetch from "./api-fetch.js";

export async function getProductsByCategory(category_id) {
  return await apiFetch("/products_by_category/" + category_id);
}
