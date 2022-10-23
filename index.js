import DOMHandler from "./scripts/dom-handler.js";


async function init() {
  try {
    // await fetch products
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
  }
}

init();
