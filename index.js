import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/HomePage.js";


async function init() {
  try {
    // await fetch categories
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
  }
}

init();
