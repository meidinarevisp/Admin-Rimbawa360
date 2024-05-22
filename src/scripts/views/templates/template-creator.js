const dashboardTemplate = () => `
   <section class="dashboard-section">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>Selamat Datang di Dashboard!</h1>
        </div>
        <div class="col-12 text-center mt-4">
          <img src="rimbawa-360.png" alt="Rimbawa 360" style="max-width: 500px;">
        </div>
        <div class="col-12 text-center mt-4">
          <a href="#" class="btn btn-dashboard btn-lg me-3">Ekowisata</a>
          <a href="#" class="btn btn-dashboard btn-lg me-3">Spesies</a>
          <a href="#" class="btn btn-dashboard btn-lg">Edukasi</a>
        </div>
      </div>
    </div>
  </section>
`;
const direktoriTemplate = () => `
  <div class="dropdown d-inline">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Direktori
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Ekowisata</a></li>
        <li><a class="dropdown-item" href="#">Edukasi</a></li>
        <li><a class="dropdown-item" href="#">Spesies</a></li>
      </ul>
    </div>

    <!-- Button with icon -->
    <button type="button" class="btn btn-primary">
      <i class="fas fa-plus"></i> Tambah
    </button>
`;
const edukasiTemplate = () => `
  
`;
const spesiesTemplate = () => `
  
`;
const formDirektoriTemplate = () => `
  
`;
const formEdukasiTemplate = () => `
  
`;
const formSpesiesTemplate = () => `
  
`;

export {
  dashboardTemplate,
  direktoriTemplate,
  edukasiTemplate,
  spesiesTemplate,
  formDirektoriTemplate,
  formEdukasiTemplate,
  formSpesiesTemplate,
};
