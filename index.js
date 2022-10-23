import { tokenKey } from "./config.js";
import DOMHandler from "./dom-handler.js";

const LoginPage = "<div>Login</div>"
const HomePage = "<div>HomePage</div>"

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) return DOMHandler.load(LoginPage);
    // await fetch products
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
    DOMHandler.load(LoginPage);
    sessionStorage.removeItem(tokenKey);
  }
}

init();
