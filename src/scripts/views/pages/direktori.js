import UrlParser from "../../routes/url-parser";
import { dashboardTemplate } from "../templates/template-creator";

const Dashboard = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = dashboardTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default Dashboard;
