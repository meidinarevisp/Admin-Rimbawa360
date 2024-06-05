import Login from "../views/pages/login";
import Dashboard from "../views/pages/dashboard";
import Direktori from "../views/pages/direktori";
import Edukasi from "../views/pages/edukasi";
import Spesies from "../views/pages/spesies";
import formDirektori from "../views/pages/form-direktori";
import formSpesies from "../views/pages/form-spesies";
import formEdukasi from "../views/pages/form-edukasi";
import editFormEdukasi from "../views/pages/edit-form-edukasi";
import editFormSpesies from "../views/pages/edit-form-spesies";
import editFormDirektori from "../views/pages/edit-form-direktori";
import Logout from "../views/pages/logout";

const routes = {
  "/": Login,
  "/dashboard": Dashboard,
  "/direktori": Direktori,
  "/edukasi": Edukasi,
  "/spesies": Spesies,
  "/form-direktori": formDirektori,
  "/form-edukasi": formEdukasi,
  "/form-spesies": formSpesies,
  "/edit-form-edukasi/:id": editFormEdukasi,
  "/edit-form-spesies/:id": editFormSpesies,
  "/edit-form-direktori/:id": editFormDirektori,
  "/logout": Logout,
};

export default routes;
