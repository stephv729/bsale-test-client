import SearchInput from "./SearchInput.js";

function render() {
  return `<div class="header-container">
  <span class="heading--md">BSale Test Online Store</span>
  ${SearchInput}
  </div>
  `;
}

const Header = {
  toString() {
    return render();
  },
  addListeners() {
    SearchInput.addListeners();
  },
};

export default Header;
