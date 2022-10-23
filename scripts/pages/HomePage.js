import Header from "../components/Header.js";

function render() {
  return `
  <div>
    ${Header}
    <div>body</div>
  </div>
  `;
}

const HomePage = {
  toString() {
    return render();
  },
};

export default HomePage;
