import UrlParser from '../../routes/url-parser'
import { formDirektoriTemplate } from '../templates/template-creator'

const formDirektori = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner()
    const renderedTemplate = formDirektoriTemplate(urlParams)

    return renderedTemplate
  },

  async afterRender() {}
}

export default formDirektori
