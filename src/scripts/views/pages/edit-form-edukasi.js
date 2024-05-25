import UrlParser from "../../routes/url-parser";
import { editFormEdukasiTemplate } from "../templates/template-creator";

const editFormEdukasi = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = editFormEdukasiTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default editFormEdukasi;
