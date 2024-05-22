import UrlParser from "../../routes/url-parser";
import { formEdukasiTemplate } from "../templates/template-creator";

const formEdukasi = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = formEdukasiTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default formEdukasi;
