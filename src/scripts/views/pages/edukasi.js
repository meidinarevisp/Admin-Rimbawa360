import UrlParser from "../../routes/url-parser";
import { edukasiTemplate } from "../templates/template-creator";
import edukasiData from "../../../data/Edukasi.json";

const Edukasi = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = edukasiTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {
    const edukasiContainer = document.querySelector("#edukasi");
    const data = edukasiData.edukasi_dan_kesadaran_lingkungan_hutan;

    data.forEach((item) => {
      const truncatedDeskripsi =
        item.deskripsi.length > 150
          ? `${item.deskripsi.substring(0, 100)}...`
          : item.deskripsi;
      const itemElement = document.createElement("div");
      itemElement.classList.add("card", "mb-3");
      itemElement.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.gambar}" class="img-fluid rounded-start" alt="${item.nama_isu}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.nama_isu}</h5>
                            <p class="card-text">${truncatedDeskripsi}</p>
                            <div class="d-flex justify-content-end">
                                <a href="/#/edit-form-edukasi"><button class="btn btn-edit rounded-circle me-2"><i class="fas fa-edit"></i></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      edukasiContainer.appendChild(itemElement);
    });
  },
};

export default Edukasi;
