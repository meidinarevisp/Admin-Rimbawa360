const dashboardTemplate = () => `
   <section class="dashboard-section">
  <div class="background-animate"></div>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Selamat Datang di Dashboard!</h1>
      </div>
      <div class="col-12 text-center mt-4">
        <img src="rimbawa-360.png" alt="Rimbawa 360" style="max-width: 500px;">
      </div>
      <div class="col-12 text-center mt-4">
        <a href="/#/direktori" class="btn btn-dashboard btn-lg me-3">Ekowisata</a>
        <a href="/#/spesies" class="btn btn-dashboard btn-lg me-3">Spesies</a>
        <a href="/#/edukasi" class="btn btn-dashboard btn-lg">Edukasi</a>
      </div>
    </div>
  </div>
</section>
`;
const direktoriTemplate = () => `
  
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
