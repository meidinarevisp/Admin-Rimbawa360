import UrlParser from "../../routes/url-parser";
import { spesiesTemplate } from "../templates/template-creator";
import spesiesData from "../../../data/Spesies.json";

const Spesies = {
  async render() {
    const urlParams = UrlParser.parseActiveUrlWithoutCombiner();
    const renderedTemplate = spesiesTemplate(urlParams);

    return renderedTemplate;
  },

  async afterRender() {
    const spesiesContainer = document.querySelector("#spesies-section");
    const data = spesiesData.BasisDataSpesies;

    data.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("card", "mb-3");
      itemElement.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.gambar}" class="img-fluid rounded-start" alt="${item.namaHewan}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.namaHewan}</h5>
                            <p class="card-text">${item.statusKonservasi}</p>
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-edit rounded-circle me-2"><i class="fas fa-edit"></i></button>
                                <button class="btn btn-hapus rounded-circle"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      spesiesContainer.appendChild(itemElement);
    });
  },
};

export default Spesies;
