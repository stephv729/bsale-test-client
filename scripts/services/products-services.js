import apiFetch from "./api-fetch.js";

export async function getProductsByCategory(category_id) {
  return await apiFetch("/categories/" + category_id + "/products");
}

export async function getProductsByName(name) {
  return await apiFetch(`/search?name=${name}`);
}
