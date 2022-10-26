import apiFetch from "./api-fetch.js";

export async function getProductsByCategory(category_id) {
  return await apiFetch("/categories/" + category_id + "/products");
}

export async function getProductsByName(name) {
  return apiFetch("/search", { method: "GET", body: { name: name } }).then(
    (data) => {
      return data;
    }
  );
}
