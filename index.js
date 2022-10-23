import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/HomePage.js";


async function init() {
  try {
    // await fetch products
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
  }
}

init();
