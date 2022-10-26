import categoriesProvider from "../context/categories-context.js";
import productsProvider from "../context/products-context.js";
import DOMHandler from "../dom-handler.js";
import SearchInput from "./SearchInput.js";

function render() {
  return `<div class="header-container">
  <span class="heading--md js-logo logo">BSale Test Online Store</span>
  ${SearchInput}
  </div>
  `;
}
function logoListener() {
  const logo = document.querySelector(".js-logo");
  logo.addEventListener("click", async (_event) => {
    productsProvider.status = "loading";
    DOMHandler.reload();
    productsProvider.queryValue = "";
    categoriesProvider.currentCategory = null;
    try {
      await productsProvider.fecthProducts();
      DOMHandler.reload();
    } catch (error) {
      console.log(error);
      DOMHandler.reload();
    }
  });
}

const Header = {
  toString() {
    return render();
  },
  addListeners() {
    SearchInput.addListeners();
    logoListener();
  },
};

export default Header;
