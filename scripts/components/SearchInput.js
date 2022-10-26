import categoriesProvider from "../context/categories-context.js";
import productsProvider from "../context/products-context.js";
import DOMHandler from "../dom-handler.js";
import { debounce } from "../utils.js";

function render() {
  const query = localStorage.getItem("query");
  return `
  <div class="inputs-wrapper">
    <div class="input-container search-input">
      <input placeholder="Search by name in all categories ..." class="js-search-input" value=${
        query || ""
      }>
      <img src="assets/search-icon.svg" alt="search" class="right-icon">
    </div>
    <input type="select">
  </div>
  `;
}
function search(query) {
  localStorage.setItem("query", query);
  productsProvider.status = "loading";
  DOMHandler.reload();
  productsProvider
    .fecthProductsByName(query)
    .then(() => {
      productsProvider.status = "success";
      categoriesProvider.currentCategory = null;
      DOMHandler.reload();
    })
    .catch((error) => {
      productsProvider.status = "error";
      console.log(error);
    });
}

function inputListener() {
  const input = document.querySelector(".js-search-input");
  const debouncedOnInput = debounce(search, 2000);
  input.addEventListener("input", (event) => {
    debouncedOnInput(event.target.value);
  });
}

const SearchInput = {
  toString() {
    return render();
  },
  addListeners() {
    inputListener();
  },
};

export default SearchInput;
