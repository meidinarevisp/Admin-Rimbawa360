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
                    <button class="btn btn-tambah rounded-circle"><i class="fas fa-plus"></i></button>
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
                    <button class="btn btn-tambah rounded-circle"><i class="fas fa-plus"></i></button>
                </div>
                <section id="edukasi" class="mt-4">
                </section>
            </div>
        </div>
    </div>
    </section>
`;
const spesiesTemplate = () => `
  <section class="spesies">
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
                        <li><a class="dropdown-item" href="/#/edukasi">Edukasi</a></li>
                    </ul>
                    <button class="btn btn-tambah rounded-circle"><i class="fas fa-plus"></i></button>
                </div>
                <section id="spesies" class="mt-4">
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
    <button type="button" class="btn-batal">Batal</button>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;
const formEdukasiTemplate = () => `
  <section class="form-edukasi">
  <img src="rimbawa-360.png" alt="Logo Rimbawa 360" class="logo">
  <h2>Form Edukasi</h2>
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
    <button type="button" class="btn-batal">Batal</button>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
`;
const formSpesiesTemplate = () => `
  <section class="form-spesies">
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
          <label for="deskripsi">Deskripsi:</label>
          <textarea id="deskripsi" name="deskripsi" rows="4" required></textarea>
        </div>
        <div class="form-group">
          <label for="kerajaan">Kerajaan:</label>
          <select id="kerajaan" name="kerajaan" required>
            <option value="">Pilih jenis kerajaan</option>
            <option value="Hutan Wisata">Hutan Wisata</option>
            <option value="Taman Nasional">Taman Nasional</option>
            <option value="Kebun Binatang">Kebun Binatang</option>
            <option value="Kebun Raya">Kebun Raya</option>
          </select>
        </div>
        <div class="form-group">
          <label for="kelas">Kelas:</label>
          <select id="kelas" name="kelas" required>
            <option value="">Pilih jenis kelas</option>
            <option value="Hutan Wisata">Hutan Wisata</option>
            <option value="Taman Nasional">Taman Nasional</option>
            <option value="Kebun Binatang">Kebun Binatang</option>
            <option value="Kebun Raya">Kebun Raya</option>
          </select>
        </div>
      </div>
      <div class="form-column">
        <div class="form-group">
          <label for="status-konservasi">Status Konservasi:</label>
          <select id="status-konservasi" name="status-konservasi" required>
            <option value="">Pilih jenis status konservasi</option>
            <option value="Hutan Wisata">Hutan Wisata</option>
            <option value="Taman Nasional">Taman Nasional</option>
            <option value="Kebun Binatang">Kebun Binatang</option>
            <option value="Kebun Raya">Kebun Raya</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ordo">Ordo:</label>
          <select id="ordo" name="ordo" required>
            <option value="">Pilih jenis ordo</option>
            <option value="Hutan Wisata">Hutan Wisata</option>
            <option value="Taman Nasional">Taman Nasional</option>
            <option value="Kebun Binatang">Kebun Binatang</option>
            <option value="Kebun Raya">Kebun Raya</option>
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
    <button type="button" class="btn-batal">Batal</button>
    <button type="submit" class="btn-simpan">Simpan</button>
  </div>
</section>
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
