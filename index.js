import categoriesProvider from "./scripts/context/categories-context.js";
import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/HomePage.js";


async function init() {
  try {
    await categoriesProvider.fetchCategories()
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
  }
}

init();
