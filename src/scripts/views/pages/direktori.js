import UrlParser from '../../routes/url-parser'
import { direktoriTemplate } from '../templates/template-creator'
import direktoriData from '../../../data/Ekowisata.json'

const Dashboard = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner()
    const renderedTemplate = direktoriTemplate(urlParams)

    return renderedTemplate
  },

  async afterRender() {
    const direktoriContainer = document.querySelector('#direktori')
    const data = direktoriData.ekowisata_hutan

    data.forEach((item) => {
      const itemElement = document.createElement('div')
      itemElement.classList.add('card', 'mb-3')
      itemElement.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.gambar}" class="img-fluid rounded-start" alt="${item.nama_tempat}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.nama_tempat}</h5>
                            <p class="card-text">${item.lokasi}</p>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-edit rounded-circle me-2"><i class="fas fa-edit"></i></button>
                                <button class="btn btn-hapus rounded-circle"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `
      direktoriContainer.appendChild(itemElement)
    })
  }
}

export default Dashboard
