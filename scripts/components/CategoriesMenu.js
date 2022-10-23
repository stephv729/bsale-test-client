import categoriesProvider from "../context/categories-context.js";

function renderCategory({ name, id }) {
  return `
      <div>
        <a href="#" data-id=${id}>
          <span class="js-contact-show">${name}</span>
        </a>
      </div>
  `;
}

function render() {
  const categories = categoriesProvider.categories;
  return `
  <div>
    ${categories
      .map((category) => {
        return renderCategory(category);
      })
      .join("")}
  </div>
  `;
}

const CategoriesMenu = {
  toString() {
    return render();
  },
};

export default CategoriesMenu;
