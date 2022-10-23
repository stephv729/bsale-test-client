import productsProvider from "../context/products-context.js";

function renderProduct({ id, name, url_image, price, discount }) {
  const fixedPrice = (price / 100).toFixed(2);
  return `
   <div class="product-card">
    <a href="#" data-id=${id}>
      <div class="img-container">
        ${
          +discount === 0
            ? ""
            : `<div class="discount-label">
          <img src="assets/discount-tag.svg" alt="discount" class="discount-icon">
          <span>${discount}%</span>
        </div>`
        }
        <img class="product-img"
        src=${url_image || "assets/no-image-available.png"}
        alt="product-thumbnail"
        />
      </div>
    
      <div class="data-n-btn-container">
        <div class="data-container">
          <div class="product-name">
            <span>${name}</span>
          </div>
          <div class="product-price">
            <img src="assets/price-tag.svg" alt="price" class="price-icon">
            <span>$${fixedPrice}</span>
          </div>
        </div>
        <a href="#" class="add-to-cart-btn">
        <img src="assets/cart-icon.svg" alt="add to cart" class="cart-icon">
         </a>
      </div>
    </a>
   </div>`;
}

function render() {
  const products = productsProvider.products
  return `
  <div class="product-list">
  ${products
    .map((product) => {
      return renderProduct(product);
    })
    .join("")}
  </div>
  `;
}

const ProductsList = {
  toString() {
    return render();
  },
  addListeners() {},
};

export default ProductsList;
