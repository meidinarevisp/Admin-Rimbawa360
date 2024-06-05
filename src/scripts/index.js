import "regenerator-runtime";
import "../styles/style.css";
import App from "./views/app";
import swRegister from "../utils/sw-register";

function isLoginPage() {
  return window.location.hash.toLowerCase().includes("login");
}

function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function requireLogin() {
  if (!isLoggedIn() && !isLoginPage()) {
    window.location.hash = "#/";
  }
}

// Tambahkan fungsi baru
function redirectIfLoggedIn() {
  if (isLoggedIn() && isLoginPage()) {
    window.location.hash = "#/dashboard";
  }
}

const app = new App({
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  requireLogin();
  redirectIfLoggedIn(); // Tambahkan ini
  app.renderPage();
  removeSpecialPageImages();
});

window.addEventListener("load", () => {
  requireLogin();
  redirectIfLoggedIn(); // Tambahkan ini
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
