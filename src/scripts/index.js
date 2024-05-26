import "regenerator-runtime";
import "../styles/style.css";
import App from "./views/app";
import swRegister from "../utils/sw-register";

const app = new App({
  content: document.querySelector("#mainContent"),
});

function isLoginPage() {
  return window.location.hash.toLowerCase().includes("login");
}

window.addEventListener("hashchange", () => {
  app.renderPage();
  removeSpecialPageImages();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
  removeSpecialPageImages();
});

function removeSpecialPageImages() {
  const loginBackground = document.querySelector(".login-background");
  const loginLogo = document.querySelector(".login-logo");

  if (!isLoginPage() && loginBackground) loginBackground.remove();
  if (!isLoginPage() && loginLogo) loginLogo.remove();
}
