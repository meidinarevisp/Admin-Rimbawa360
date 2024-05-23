import UrlParser from "../../routes/url-parser";
import { direktoriTemplate } from "../templates/template-creator";
import direktoriData from "../../../data/Ekowisata.json";

const Dashboard = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = direktoriTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default Dashboard;
