const Logout = {
  async render() {},

  async afterRender() {
    localStorage.removeItem("isLoggedIn");
    window.location.hash = "#/";
  },
};

export default Logout;
