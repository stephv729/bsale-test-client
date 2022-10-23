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
  <aside class="menu">
    ${categories
      .map((category) => {
        return renderCategory(category);
      })
      .join("")}
  </aside>
  `;
}

const CategoriesMenu = {
  toString() {
    return render();
  },
};

export default CategoriesMenu;
