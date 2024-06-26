import UrlParser from "../../routes/url-parser";
import { loginTemplate } from "../templates/template-creator";
import loginImage from "../../../public/images/login.png";
import logoImage from "../../../public/rimbawa-360.png";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Login = {
  async render() {
    // Tambahkan pengecekan ini di awal fungsi render
    if (localStorage.getItem("isLoggedIn") === "true") {
      window.location.hash = "#/dashboard";
      return "";
    }

    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = loginTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {
    // Tambahkan pengecekan ini di awal fungsi afterRender
    if (localStorage.getItem("isLoggedIn") === "true") {
      return;
    }

    const imgBackground = document.createElement("img");
    imgBackground.src = loginImage;
    imgBackground.classList.add("login-background");
    document.body.appendChild(imgBackground);

    const logoElement = document.createElement("img");
    logoElement.src = logoImage;
    logoElement.classList.add("login-logo");
    document.body.appendChild(logoElement);

    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "rimbawa360") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "/#/dashboard";
      } else {
        toastr.error("Login gagal, cek ulang username dan password kamu.", "", {
          timeOut: 3000,
        });
      }
    });

    const showPasswordIcon = document.getElementById("showPasswordIcon");
    showPasswordIcon.addEventListener("click", () => {
      const passwordField = document.getElementById("password");
      if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordIcon.classList.remove("fa-eye");
        showPasswordIcon.classList.add("fa-eye-slash");
      } else {
        passwordField.type = "password";
        showPasswordIcon.classList.remove("fa-eye-slash");
        showPasswordIcon.classList.add("fa-eye");
      }
    });
  },
};

export default Login;
