import Dashboard from "../views/pages/dashboard";
import Direktori from "../views/pages/direktori";
import Edukasi from "../views/pages/edukasi";
import Spesies from "../views/pages/spesies";
import formDirektori from "../views/pages/form-direktori";
import formEdukasi from "../views/pages/form-edukasi";
import formSpesies from "../views/pages/form-spesies";

const routes = {
  "/": Dashboard,
  "/direktori": Direktori,
  "/edukasi": Edukasi,
  "/spesies": Spesies,
  "/form-direktori": formDirektori,
  "/form-edukasi": formEdukasi,
  "/form-spesies": formSpesies,
};

export default routes;
