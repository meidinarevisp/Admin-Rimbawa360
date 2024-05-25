import UrlParser from '../../routes/url-parser'
import { formSpesiesTemplate } from '../templates/template-creator'

const formSpesies = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner()
    const renderedTemplate = formSpesiesTemplate(urlParams)

    return renderedTemplate
  },

  async afterRender() {}
}

export default formSpesies
