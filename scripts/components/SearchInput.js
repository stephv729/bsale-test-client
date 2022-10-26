import categoriesProvider from "../context/categories-context.js";
import productsProvider from "../context/products-context.js";
import DOMHandler from "../dom-handler.js";
import { debounce } from "../utils.js";

function render() {
  const categories = categoriesProvider.categories;

  return `
  <div class="inputs-wrapper">
    <div class="input-container search-input">
      <input placeholder="Search by name ..." class="js-search-input" value=${
        productsProvider.queryValue || ""
      }>
      <img src="assets/search-icon.svg" alt="search" class="right-icon">
    </div>
    <select id="category" name="categories" class="select-input js-category-select">
      <option value="" ${
        categoriesProvider.currentCategory ? "" : "selected"
      }> All Categories</option>
      
      ${categories
        .map((category) => {
          return `<option ${
            +category.id === +categoriesProvider.currentCategory
              ? "selected"
              : ""
          } value=${category.id}>${category.name}</option>`;
        })
        .join("")}
    </select>
  </div>
  `;
}
function search() {
  productsProvider.status = "loading";
  DOMHandler.reload();
  productsProvider
    .fecthProductsBySearch(
      productsProvider.queryValue,
      categoriesProvider.currentCategory
    )
    .then(() => {
      productsProvider.status = "success";
      DOMHandler.reload();
    })
    .catch((error) => {
      productsProvider.status = "error";
      console.log(error);
      DOMHandler.reload();
    });
}

function inputListener() {
  const input = document.querySelector(".js-search-input");
  const debouncedSearch = debounce(search, 2000);
  input.addEventListener("input", (event) => {
    productsProvider.queryValue = event.target.value;
    debouncedSearch();
  });
}

function selectListener() {
  const input = document.querySelector(".js-category-select");
  input.addEventListener("change", (event) => {
    categoriesProvider.currentCategory = event.target.value || null;
    search();
  });
}

const SearchInput = {
  toString() {
    return render();
  },
  addListeners() {
    inputListener();
    selectListener();
  },
};

export default SearchInput;
