import categoriesProvider from "../context/categories-context.js";

function renderCategory({ name, id }) {
  return `
      <div class="menu-item">
        <a href="#" data-id=${id} class="content-md">
          <span class="js-category">${name}</span>
        </a>
      </div>
  `;
}

function render() {
  const categories = categoriesProvider.categories;
  return `
  <aside class="menu js-menu-categories">
    ${categories
      .map((category) => {
        return renderCategory(category);
      })
      .join("")}
  </aside>
  `;
}

function menuItemListener() {
  const menuItems = document.querySelectorAll(".js-menu-categories");
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", async (event) => {
      const menuItemLink = event.target.closest("[data-id]");
      if (!menuItemLink) return;
      const id = menuItemLink.dataset.id
      categoriesProvider.currentCategory = id
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
