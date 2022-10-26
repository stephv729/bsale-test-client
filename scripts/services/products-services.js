import apiFetch from "./api-fetch.js";

export async function getProductsByCategory(categoryId) {
  return await apiFetch("/categories/" + categoryId + "/products");
}

export async function getProductsByName(name) {
  return await apiFetch(`/search?name=${name}`);
}

export async function getProductsByNameAndCategory(name, categoryId) {
  return await apiFetch(`/search?name=${name}&category=${categoryId}`);
}
