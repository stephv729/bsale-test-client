import CategoriesMenu from "../components/CategoriesMenu.js";
import Header from "../components/Header.js";

function render() {
  return `
  <div>
    ${Header}
    <div>${CategoriesMenu}</div>
  </div>
  `;
}

const HomePage = {
  toString() {
    return render();
  },
};

export default HomePage;
