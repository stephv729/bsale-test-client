import CategoriesMenu from "../components/CategoriesMenu.js";
import Header from "../components/Header.js";
import ProductsList from "../components/ProductsList.js";

function render() {
  return `
  <div class="section">
    ${Header}
    <div class="main-container">
      ${CategoriesMenu}
      ${ProductsList}
    </div>
  </div>
  `;
}

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    Header.addListeners();
    CategoriesMenu.addListeners();
  },
};

export default HomePage;
