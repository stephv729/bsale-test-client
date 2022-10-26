import categoriesProvider from "../context/categories-context.js";
import productsProvider from "../context/products-context.js";
import DOMHandler from "../dom-handler.js";

function renderCategory({ name, id }) {
  return `
      <div class="menu-item ${
        +categoriesProvider.currentCategory === +id ? "active" : ""
      }">
        <a href="#" data-id=${id} class="content-xs overline">
          <span class="js-category">${name}</span>
        </a>
      </div>
  `;
}

function render() {
  const categories = categoriesProvider.categories;
  const sortedCategories = categories.sort((a, b) =>
    a.name.normalize().localeCompare(b.name.normalize())
  );
  return `
  <aside class="menu">
      <span class="content-lg overline filter">Categories</span>
      <div class="js-menu-categories">
        ${sortedCategories
          .map((category) => {
            return renderCategory(category);
          })
          .join("")}
      </div>
  </aside>
  `;
}

function menuItemListener() {
  const menuItems = document.querySelectorAll(".js-menu-categories");
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", (event) => {
      const menuItemLink = event.target.closest("[data-id]");
      if (!menuItemLink) return;
      const id = menuItemLink.dataset.id;
      categoriesProvider.currentCategory = id;
      productsProvider.status = "loading";
      DOMHandler.reload();
      productsProvider
        .fecthProductsByCategories()
        .then(() => {
          productsProvider.status = "success";
          productsProvider.queryValue = "";
          DOMHandler.reload();
        })
        .catch((error) => {
          productsProvider.status = "error";
          console.log(error);
        });
    })
  );
}

const CategoriesMenu = {
  toString() {
    return render();
  },
  addListeners() {
    menuItemListener();
  },
};

export default CategoriesMenu;
