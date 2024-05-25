import UrlParser from "../../routes/url-parser";
import { editFormDirektoriTemplate } from "../templates/template-creator";

const editFormDirektori = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = editFormDirektoriTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default editFormDirektori;
