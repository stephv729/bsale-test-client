import categoriesProvider from "../context/categories-context.js";
import productsProvider from "../context/products-context.js";
import DOMHandler from "../dom-handler.js";

function renderCategory({ name, id }) {
  return `
      <div class="menu-item">
        <a href="#" data-id=${id} class="content-xs overline">
          <span class="js-category">${name}</span>
        </a>
      </div>
  `;
}

function render() {
  const categories = categoriesProvider.categories;
  return `
  <aside class="menu">
      <span class="content-lg overline filter">Categories</span>
      <div class="js-menu-categories">
        ${categories
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
    menuItem.addEventListener("click", async (event) => {
      const menuItemLink = event.target.closest("[data-id]");
      if (!menuItemLink) return;
      const id = menuItemLink.dataset.id;
      categoriesProvider.currentCategory = id;
      try {
        await productsProvider.fecthProductsByCategories();
        DOMHandler.reload();
      } catch (error) {
        console.log(error);
      }
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
