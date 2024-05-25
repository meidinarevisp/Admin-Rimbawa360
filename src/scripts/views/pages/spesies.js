import UrlParser from '../../routes/url-parser'
import { spesiesTemplate } from '../templates/template-creator'

const Spesies = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner()
    const renderedTemplate = spesiesTemplate(urlParams)

    return renderedTemplate
  },

  async afterRender() {}
}

export default Spesies
