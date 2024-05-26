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
<section class="direktori">
   <div class="container mt-4">
        <div class="row">
            <div class="col-10">
                <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo" />
                <div class="dropdown d-flex justify-content-between align-items-center">
                    <h1 class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Direktori Ekowisata Hutan
                    </h1>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/#/edukasi">Edukasi</a></li>
                        <li><a class="dropdown-item" href="/#/spesies">Spesies</a></li>
                    </ul>
                    <a href="/#/form-direktori"><button class="btn btn-tambah rounded-circle"><i class="fas fa-plus"></i></button></a>
                </div>
                <section id="direktori" class="mt-4">
                </section>
            </div>
        </div>
    </div>
    </section>
`;
const edukasiTemplate = () => `
  <section class="edukasi">
   <div class="container mt-4">
        <div class="row">
            <div class="col-10">
                <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo" />
                <div class="dropdown d-flex justify-content-between align-items-center">
                    <h1 class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Edukasi
                    </h1>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/#/direktori">Direktori Ekowisata Hutan</a></li>
                        <li><a class="dropdown-item" href="/#/spesies">Spesies</a></li>
                    </ul>
                </div>
                <section id="edukasi" class="mt-4">
                </section>
            </div>
        </div>
    </div>
    </section>
`;
const spesiesTemplate = () => `
  <section class="spesies-section">
   <div class="container mt-4">
        <div class="row">
            <div class="col-10">
                <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo" />
                <div class="dropdown d-flex justify-content-between align-items-center">
                    <h1 class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Spesies
                    </h1>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/#/direktori">Direktori Ekowisata Hutan</a></li>
                        <li><a class="dropdown-item" href="/#/edukasi">Edukasi</a></li>
                    </ul>
                    <a href="/#/form-spesies"><button class="btn btn-tambah rounded-circle"><i class="fas fa-plus"></i></button></a>
                </div>
                <section id="spesies-section" class="mt-4">
                </section>
            </div>
        </div>
    </div>
    </section>
`;
const formDirektoriTemplate = () => `
<section class="form-direktori">
  <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo">
  <h2>Form Direktori Ekowisata Hutan</h2>
  <form>
    <div class="form-container">
      <div class="form-column">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input type="text" id="nama" name="nama" required>
        </div>
        <div class="form-group">
          <label for="lokasi">Lokasi:</label>
          <input type="text" id="lokasi" name="lokasi" required>
        </div>
        <div class="form-group">
          <label for="deskripsi">Deskripsi:</label>
          <textarea class="mb-2" id="deskripsi" name="deskripsi" rows="4" required></textarea>
        </div>
        <div class="form-group">
          <label for="aktivitas">Aktivitas:</label>
          <input type="text" id="aktivitas" name="aktivitas" required>
        </div>
      </div>
      <div class="form-column">
      <div class="form-group">
          <label for="fasilitas">Fasilitas:</label>
          <input type="text" id="fasilitas" name="fasilitas" required>
        </div>
        <div class="form-group">
          <label for="akses">Akses:</label>
          <input type="text" id="akses" name="akses" required>
        </div>
        <div class="form-group">
          <label for="latitude">Latitude:</label>
          <input type="text" id="latitude" name="latitude" required>
        </div>
        <div class="form-group">
          <label for="longitude">Longitude:</label>
          <input type="text" id="longitude" name="longitude" required>
        </div>
        <div class="form-group">
          <label for="gambar">Gambar:</label>
          <input type="file" id="gambar" name="gambar" accept="image/*" required>
        </div>
      </div>
    </div>
  </form>
  <div class="buttons">
    <a href="/#/direktori"><button type="button" class="btn-batal">Batal</button></a>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;
const editFormEdukasiTemplate = () => `
  <section class="form-edukasi">
  <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo">
  <h2>Form Edit Edukasi</h2>
  <form>
    <div class="form-group">
      <label for="judul">Judul:</label>
      <input type="text" id="judul" name="judul" required>
    </div>
    <div class="form-group">
      <label for="deskripsi">Deskripsi:</label>
      <textarea id="deskripsi" name="deskripsi" rows="4" required></textarea>
    </div>
    <div class="form-group">
      <label for="dampak">Dampak:</label>
      <textarea id="dampak" name="dampak" rows="3" required></textarea>
    </div>
    <div class="form-group">
      <label for="solusi">Solusi:</label>
      <textarea id="solusi" name="solusi" rows="3" required></textarea>
    </div>
    <div class="form-group">
      <label for="gambar">Gambar:</label>
      <input type="file" id="gambar" name="gambar" accept="image/*" required>
    </div>
  </form>
  <div class="buttons">
    <a href="/#/edukasi"><button type="button" class="btn-batal">Batal</button></a>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;
const formSpesiesTemplate = () => `
  <section class="form-spesies">
  <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo">
  <h2>Form Spesies</h2>
  <form>
    <div class="form-container">
      <div class="form-column">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input type="text" id="nama" name="nama" required>
        </div>
        <div class="form-group">
          <label for="deskripsi">Deskripsi:</label>
          <textarea id="deskripsi" name="deskripsi" rows="4" required></textarea>
        </div>
        <div class="form-group">
          <label for="kerajaan">Kerajaan:</label>
          <select id="kerajaan" name="kerajaan" required>
            <option value="">Pilih jenis kerajaan</option>
            <option value="Animalia">Animalia</option>
            <option value="Plantae">Plantae</option>
            <option value="Fungi">Fungi</option>
            <option value="Protista">Protista</option>
            <option value="Archaea">Archaea</option>
            <option value="Bacteria">Bacteria</option>
          </select>
        </div>
        <div class="form-group">
          <label for="kelas">Kelas:</label>
          <select id="kelas" name="kelas" required>
            <option value="">Pilih jenis kelas</option>
            <option value="Mammalia">Mammalia</option>
            <option value="Aves">Aves</option>
            <option value="Reptilia">Reptilia</option>
            <option value="Amphibia">Amphibia</option>
            <option value="Actinopterygii">Actinopterygii</option>
            <option value="Insecta">Insecta</option>
            <option value="Arachnida">Arachnida</option>
            <option value="Magnoliopsida">Magnoliopsida (Dikotil)</option>
            <option value="Liliopsida">Liliopsida (Monokotil)</option>
            <option value="Bryopsida">Bryopsida (Lumut Daun)</option>
            <option value="Pteridopsida">Pteridopsida (Pakis)</option>
            <option value="Ascomycota">Ascomycota (Jamur Kantung)</option>
            <option value="Basidiomycota">Basidiomycota (Jamur Basidium)</option>
            <option value="Chlorophyta">Chlorophyta (Alga Hijau)</option>
            <option value="Ciliophora">Ciliophora (Ciliata)</option>
            <option value="Euryarchaeota">Euryarchaeota</option>
            <option value="Crenarchaeota">Crenarchaeota</option>
            <option value="Proteobacteria">Proteobacteria</option>
            <option value="Firmicutes">Firmicutes</option>
        </select>
        </div>
      </div>
      <div class="form-column">
        <div class="form-group">
          <label for="status-konservasi">Status Konservasi:</label>
          <select id="status-konservasi" name="status-konservasi" required>
            <option value="">Pilih jenis status konservasi</option>
            <option value="Punah">Extinct (EX) - Punah</option>
            <option value="Punah di Alam Liar">Extinct in the Wild (EW) - Punah di Alam Liar</option>
            <option value="Kritis">Critically Endangered (CR) - Kritis</option>
            <option value="Terancam">Endangered (EN) - Terancam</option>
            <option value="Rentan">Vulnerable (VU) - Rentan</option>
            <option value="Hampir Terancam">Near Threatened (NT) - Hampir Terancam</option>
            <option value="Risiko Rendah">Least Concern (LC) - Risiko Rendah</option>
            <option value="Data Kurang">Data Deficient (DD) - Data Kurang</option>
            <option value="Belum Dievaluasi">Not Evaluated (NE) - Belum Dievaluasi</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ordo">Ordo:</label>
          <select id="ordo" name="ordo" required>
            <option value="">Pilih jenis ordo</option>
            <option value="Primates">Primates</option>
            <option value="Carnivora">Carnivora</option>
            <option value="Cetacea">Cetacea</option>
            <option value="Rodentia">Rodentia</option>
            <option value="Chiroptera">Chiroptera</option>
            <option value="Passeriformes">Passeriformes</option>
            <option value="Accipitriformes">Accipitriformes</option>
            <option value="Strigiformes">Strigiformes</option>
            <option value="Anseriformes">Anseriformes</option>
            <option value="Psittaciformes">Psittaciformes</option>
            <option value="Squamata">Squamata</option>
            <option value="Testudines">Testudines</option>
            <option value="Crocodylia">Crocodylia</option>
            <option value="Anura">Anura</option>
            <option value="Caudata">Caudata</option>
            <option value="Gymnophiona">Gymnophiona</option>
            <option value="Coleoptera">Coleoptera</option>
            <option value="Lepidoptera">Lepidoptera</option>
            <option value="Diptera">Diptera</option>
            <option value="Hymenoptera">Hymenoptera</option>
            <option value="Orthoptera">Orthoptera</option>
        </select>
        </div>
        <div class="form-group">
          <label for="spesies">Spesies:</label>
          <input type="text" id="spesies" name="spesies" required>
        </div>
        <div class="form-group">
          <label for="populasi">Populasi:</label>
          <input type="text" id="populasi" name="populasi" required>
        </div>
        <div class="form-group">
          <label for="rentangan-hidup">Rentangan Hidup:</label>
          <input type="text" id="rentangan-hidup" name="rentangan-hidup" required>
        </div>
      </div>
      <div class="form-column">
        <div class="form-group">
          <label for="panjang">Panjang:</label>
          <input type="text" id="panjang" name="panjang" required>
        </div>
        <div class="form-group">
          <label for="berat">Berat:</label>
          <input type="text" id="berat" name="berat" required>
        </div>
        <div class="form-group">
          <label for="kecepatan-tertinggi">Kecepatan Tertinggi:</label>
          <input type="text" id="kecepatan-tertinggi" name="kecepatan-tertinggi" required>
        </div>
        <div class="form-group">
          <label for="gambar">Gambar:</label>
          <input type="file" id="gambar" name="gambar" accept="image/*" required>
        </div>
      </div>
    </div>
  </form>
  <div class="buttons">
    <a href="/#/spesies"><button type="button" class="btn-batal">Batal</button></a>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;

const editFormDirektoriTemplate = () => `
<section class="edit-form-direktori">
  <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo">
  <h2>Edit Form Direktori Ekowisata Hutan</h2>
  <form>
    <div class="form-container">
      <div class="form-column">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input type="text" id="nama" name="nama" required>
        </div>
        <div class="form-group">
          <label for="lokasi">Lokasi:</label>
          <input type="text" id="lokasi" name="lokasi" required>
        </div>
        <div class="form-group">
          <label for="deskripsi">Deskripsi:</label>
          <textarea class="mb-2" id="deskripsi" name="deskripsi" rows="4" required></textarea>
        </div>
        <div class="form-group">
          <label for="aktivitas">Aktivitas:</label>
          <input type="text" id="aktivitas" name="aktivitas" required>
        </div>
      </div>
      <div class="form-column">
      <div class="form-group">
          <label for="fasilitas">Fasilitas:</label>
          <input type="text" id="fasilitas" name="fasilitas" required>
        </div>
        <div class="form-group">
          <label for="akses">Akses:</label>
          <input type="text" id="akses" name="akses" required>
        </div>
        <div class="form-group">
          <label for="latitude">Latitude:</label>
          <input type="text" id="latitude" name="latitude" required>
        </div>
        <div class="form-group">
          <label for="longitude">Longitude:</label>
          <input type="text" id="longitude" name="longitude" required>
        </div>
        <div class="form-group">
          <label for="gambar">Gambar:</label>
          <input type="file" id="gambar" name="gambar" accept="image/*" required>
        </div>
      </div>
    </div>
  </form>
  <div class="buttons">
    <a href="/#/direktori"><button type="button" class="btn-batal">Batal</button></a>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;

const editFormSpesiesTemplate = () => `
<section class="edit-form-spesies">
  <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo">
  <h2>Edit Form Spesies</h2>
  <form>
    <div class="form-container">
      <div class="form-column">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input type="text" id="nama" name="nama" required>
        </div>
        <div class="form-group">
          <label for="deskripsi">Deskripsi:</label>
          <textarea id="deskripsi" name="deskripsi" rows="4" required></textarea>
        </div>
        <div class="form-group">
          <label for="kerajaan">Kerajaan:</label>
          <select id="kerajaan" name="kerajaan" required>
            <option value="">Pilih jenis kerajaan</option>
            <option value="Animalia">Animalia</option>
            <option value="Plantae">Plantae</option>
            <option value="Fungi">Fungi</option>
            <option value="Protista">Protista</option>
            <option value="Archaea">Archaea</option>
            <option value="Bacteria">Bacteria</option>
          </select>
        </div>
        <div class="form-group">
          <label for="kelas">Kelas:</label>
          <select id="kelas" name="kelas" required>
            <option value="">Pilih jenis kelas</option>
            <option value="Mammalia">Mammalia</option>
            <option value="Aves">Aves</option>
            <option value="Reptilia">Reptilia</option>
            <option value="Amphibia">Amphibia</option>
            <option value="Actinopterygii">Actinopterygii</option>
            <option value="Insecta">Insecta</option>
            <option value="Arachnida">Arachnida</option>
            <option value="Magnoliopsida">Magnoliopsida (Dikotil)</option>
            <option value="Liliopsida">Liliopsida (Monokotil)</option>
            <option value="Bryopsida">Bryopsida (Lumut Daun)</option>
            <option value="Pteridopsida">Pteridopsida (Pakis)</option>
            <option value="Ascomycota">Ascomycota (Jamur Kantung)</option>
            <option value="Basidiomycota">Basidiomycota (Jamur Basidium)</option>
            <option value="Chlorophyta">Chlorophyta (Alga Hijau)</option>
            <option value="Ciliophora">Ciliophora (Ciliata)</option>
            <option value="Euryarchaeota">Euryarchaeota</option>
            <option value="Crenarchaeota">Crenarchaeota</option>
            <option value="Proteobacteria">Proteobacteria</option>
            <option value="Firmicutes">Firmicutes</option>
        </select>
        </div>
      </div>
      <div class="form-column">
        <div class="form-group">
          <label for="status-konservasi">Status Konservasi:</label>
          <select id="status-konservasi" name="status-konservasi" required>
            <option value="">Pilih jenis status konservasi</option>
            <option value="Punah">Extinct (EX) - Punah</option>
            <option value="Punah di Alam Liar">Extinct in the Wild (EW) - Punah di Alam Liar</option>
            <option value="Kritis">Critically Endangered (CR) - Kritis</option>
            <option value="Terancam">Endangered (EN) - Terancam</option>
            <option value="Rentan">Vulnerable (VU) - Rentan</option>
            <option value="Hampir Terancam">Near Threatened (NT) - Hampir Terancam</option>
            <option value="Risiko Rendah">Least Concern (LC) - Risiko Rendah</option>
            <option value="Data Kurang">Data Deficient (DD) - Data Kurang</option>
            <option value="Belum Dievaluasi">Not Evaluated (NE) - Belum Dievaluasi</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ordo">Ordo:</label>
          <select id="ordo" name="ordo" required>
            <option value="">Pilih jenis ordo</option>
            <option value="Primates">Primates</option>
            <option value="Carnivora">Carnivora</option>
            <option value="Cetacea">Cetacea</option>
            <option value="Rodentia">Rodentia</option>
            <option value="Chiroptera">Chiroptera</option>
            <option value="Passeriformes">Passeriformes</option>
            <option value="Accipitriformes">Accipitriformes</option>
            <option value="Strigiformes">Strigiformes</option>
            <option value="Anseriformes">Anseriformes</option>
            <option value="Psittaciformes">Psittaciformes</option>
            <option value="Squamata">Squamata</option>
            <option value="Testudines">Testudines</option>
            <option value="Crocodylia">Crocodylia</option>
            <option value="Anura">Anura</option>
            <option value="Caudata">Caudata</option>
            <option value="Gymnophiona">Gymnophiona</option>
            <option value="Coleoptera">Coleoptera</option>
            <option value="Lepidoptera">Lepidoptera</option>
            <option value="Diptera">Diptera</option>
            <option value="Hymenoptera">Hymenoptera</option>
            <option value="Orthoptera">Orthoptera</option>
        </select>
        </div>
        <div class="form-group">
          <label for="spesies">Spesies:</label>
          <input type="text" id="spesies" name="spesies" required>
        </div>
        <div class="form-group">
          <label for="populasi">Populasi:</label>
          <input type="text" id="populasi" name="populasi" required>
        </div>
        <div class="form-group">
          <label for="rentangan-hidup">Rentangan Hidup:</label>
          <input type="text" id="rentangan-hidup" name="rentangan-hidup" required>
        </div>
      </div>
      <div class="form-column">
        <div class="form-group">
          <label for="panjang">Panjang:</label>
          <input type="text" id="panjang" name="panjang" required>
        </div>
        <div class="form-group">
          <label for="berat">Berat:</label>
          <input type="text" id="berat" name="berat" required>
        </div>
        <div class="form-group">
          <label for="kecepatan-tertinggi">Kecepatan Tertinggi:</label>
          <input type="text" id="kecepatan-tertinggi" name="kecepatan-tertinggi" required>
        </div>
        <div class="form-group">
          <label for="gambar">Gambar:</label>
          <input type="file" id="gambar" name="gambar" accept="image/*" required>
        </div>
      </div>
    </div>
  </form>
  <div class="buttons">
    <a href="/#/spesies"><button type="button" class="btn-batal">Batal</button></a>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;

const loginTemplate = () => `
<section class="login-section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card p-4">
          <div class="card-body">
            <h2 class="text-center">Login Admin</h2>
            <form>
              <div class="form-group mb-3">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Masukkan username" required>
              </div>
              <div class="form-group mb-3">
                <label for="password">Password</label>
                <div class="input-group">
                  <input type="password" class="form-control" id="password" placeholder="Masukkan password" required>
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <span id="showPasswordIcon" class="fa fa-eye"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-login">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export {
  dashboardTemplate,
  direktoriTemplate,
  edukasiTemplate,
  spesiesTemplate,
  formDirektoriTemplate,
  editFormEdukasiTemplate,
  formSpesiesTemplate,
  editFormDirektoriTemplate,
  editFormSpesiesTemplate,
  loginTemplate,
};
