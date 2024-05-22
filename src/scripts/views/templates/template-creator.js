const dashboardTemplate = () => `
  
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
