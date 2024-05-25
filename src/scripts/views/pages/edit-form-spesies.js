import UrlParser from "../../routes/url-parser";
import { editFormSpesiesTemplate } from "../templates/template-creator";

const editFormSpesies = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = editFormSpesiesTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {},
};

export default editFormSpesies;
