import productsProvider from "../context/products-context.js";

function render() {
  const { fecthProductsByName } = productsProvider;
  return `
  <div>
  <input/>
  </div>
  `;
}

const SearchInput = {
  toString() {
    return render();
  },
  addListeners() {},
};

export default SearchInput;
