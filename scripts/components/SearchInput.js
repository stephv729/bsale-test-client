import productsProvider from "../context/products-context.js";
import DOMHandler from "../dom-handler.js";

function render() {
  return `
  <div class="input-container">
  <input placeholder="search" class="js-search-input"/>
  <img src="assets/search-icon.svg" alt="search" class="right-icon">
  </div>
  `;
}
function search(query) {
  if (!query) return;

  productsProvider.status = "loading";
  // DOMHandler.reload();
  productsProvider
    .fecthProductsByName(query)
    .then(() => {
      productsProvider.status = "success";
      DOMHandler.reload();
    })
    .catch((error) => {
      productsProvider.status = "error";
      console.log(error);
    });
}

function inputListener() {
  const input = document.querySelector(".js-search-input");
  input.addEventListener("input", (event) => {
    search(event.target.value);
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
