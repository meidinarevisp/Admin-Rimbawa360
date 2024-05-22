import UrlParser from "../../routes/url-parser";
import { edukasiTemplate } from "../templates/template-creator";

const Edukasi = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = edukasiTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default Edukasi;
