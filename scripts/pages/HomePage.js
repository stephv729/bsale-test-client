import CategoriesMenu from "../components/CategoriesMenu.js";
import Header from "../components/Header.js";

function render() {
  return `
  <div>
    ${Header}
    <div class="main-container">
      ${CategoriesMenu}
      <div>products</div>
    </div>
  </div>
  `;
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    CategoriesMenu.addListeners();
  },
};

export default HomePage;
