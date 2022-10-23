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
         add to cart
         </a>
      </div>
    </a>
   </div>`;
}

const dummyProducts = [
  {
    id: 5,
    name: "ENERGETICA MR BIG",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    price: 1490.0,
    discount: 20,
    category: 1,
  },
  {
    id: 6,
    name: "ENERGETICA RED BULL",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
    price: 1490.0,
    discount: 0,
    category: 1,
  },
  {
    id: 7,
    name: "ENERGETICA SCORE",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
    price: 1290.0,
    discount: 0,
    category: 1,
  },
  {
    id: 34,
    name: "ENERGETICA MONSTER RIPPER",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
    price: 1990.0,
    discount: 0,
    category: 1,
  },
  {
    id: 35,
    name: "ENERGETICA MAKKA DRINKS",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/makka-drinks-250ml0455.jpg",
    price: 1190.0,
    discount: 0,
    category: 1,
  },
  {
    id: 36,
    name: "ENERGETICA MONSTER VERDE",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg",
    price: 1990.0,
    discount: 0,
    category: 1,
  },
  {
    id: 77,
    name: "ENERGETICA MONSTER RIPPER",
    url_image: "",
    price: 1990.0,
    discount: 0,
    category: 1,
  },
  {
    id: 79,
    name: "ENERGETICA MONSTER VERDE",
    url_image: "",
    price: 1990.0,
    discount: 0,
    category: 1,
  },
];

function render() {
  return `
  <div class="product-list">
  ${dummyProducts
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
